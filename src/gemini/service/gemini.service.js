const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { treatVolumeFilters } = require("../../utils/filters.service");
const { Prisma, db, parseError } = require("../../utils/db.service");

const { env } = require("process");

// const { GoogleGenAI } = require("@google/genai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

const NUMBER_OF_RETRIES = 5;

const categories = [
    {
        id: 1000001,
        slug: "obras-basicas",
        name: "1. Obras Básicas",
        search_name: "obras basicas",
        description:
            "Categoria dedicada aos livros fundamentais codificados por Allan Kardec, que formam o alicerce do Espiritismo. Aqui estão as obras que explicam as leis espirituais, a natureza da alma e a relação entre o mundo físico e o espiritual. É o ponto de partida para quem deseja compreender a Doutrina Espírita de forma séria, segura e estruturada."
    },
    {
        id: 1000002,
        slug: "mensagens",
        name: "2. Mensagens",
        search_name: "mensagens",
        description:
            "Reúne livros com textos curtos, reflexões, crônicas e poesias recebidas por médiuns. São leituras rápidas e inspiradoras, perfeitas para momentos de introspecção, abertura de reuniões ou para quem busca orientação espiritual no cotidiano. Conteúdo leve, consolador e fácil de compartilhar."
    },
    {
        id: 1000003,
        slug: "romances",
        name: "3. Romances",
        search_name: "romances",
        description:
            "Narrativas envolventes que utilizam histórias de vida e reencarnações para ilustrar as leis espirituais, como causa e efeito, evolução moral e aprendizado da alma. São obras que emocionam e ensinam, ajudando o leitor a compreender conceitos espíritas por meio de exemplos práticos e situações vividas pelos personagens."
    },
    {
        id: 1000004,
        slug: "estudo",
        name: "4. Doutrina e Estudo",
        search_name: "doutrina e estudo",
        description:
            "Categoria voltada ao aprofundamento teórico, filosófico e prático da Doutrina Espírita. Ideal para quem busca compreender com mais profundidade os mecanismos do plano espiritual, a mediunidade, os ensinamentos morais de Jesus e os estudos que relacionam Espiritismo, ciência e filosofia."
    },
    {
        id: 1000005,
        slug: "mundo-espiritual",
        name: "4.1. A Vida no Mundo Espiritual",
        search_name: "a vida no mundo espiritual",
        description:
            "ras que descrevem a realidade do plano espiritual: suas organizações, colônias, atividades, rotinas e processos de desencarne e adaptação. Fornecem uma visão clara e detalhada do que nos aguarda após a vida material, baseadas em relatos mediúnicos confiáveis."
    },
    {
        id: 1000006,
        slug: "mediunidade",
        name: "4.2. Mediunidade",
        search_name: "mediunidade",
        description:
            "Livros técnicos e instrutivos que explicam como ocorre a comunicação entre encarnados e desencarnados. Abordam tipos de mediunidade, responsabilidades do médium, técnicas de desenvolvimento seguro e orientações para trabalhos assistenciais e de cura espiritual."
    },
    {
        id: 1000007,
        slug: "ciencia-filosofia",
        name: "4.3. Ciência e Filosofia",
        search_name: "ciencia e filosofia",
        description:
            "Obras que conectam o Espiritismo ao raciocínio científico e à reflexão filosófica, discutindo temas como a origem do espírito, evidências da sobrevivência da alma, leis morais do universo e a relação entre matéria e energia. Excelente para leitores que buscam argumentos racionais e lógica doutrinária."
    },
    {
        id: 1000008,
        slug: "evangelho",
        name: "4.4. Evangelho e Reforma Íntima",
        search_name: "evangelho e reforma intima",
        description:
            "Livros dedicados à transformação moral e ao autoconhecimento, baseados na interpretação espírita dos ensinamentos de Jesus. Trazem orientação prática para desenvolver virtudes, superar desafios emocionais e fortalecer a fé diante das dificuldades."
    },
    {
        id: 1000009,
        slug: "apoio-trabalhador",
        name: "4.5. Apoio ao Trabalhador",
        search_name: "apoio ao trabalhador",
        description:
            "Materiais práticos para dirigentes, médiuns, passistas, palestrantes e voluntários da Casa Espírita. Incluem roteiros, métodos de estudo, organização de reuniões, conduta mediúnica e orientações administrativas. São guias essenciais para quem participa ativamente de atividades espirituais e assistenciais."
    },
    {
        id: 1000010,
        slug: "infanto-juvenil",
        name: "5. Infanto-Juvenil",
        search_name: "infantojuvenil",
        description:
            "Livros voltados ao aprendizado espiritual de crianças e jovens, utilizando histórias, ilustrações e linguagem acessível. Transmitem valores cristãos, noções de espiritualidade, reencarnação e amor ao próximo, auxiliando na formação moral e emocional dos pequenos leitores."
    }
];

const tags = [
    {
        id: 1000001,
        slug: "aborto",
        name: "Aborto",
        description:
            "Tema que aborda as consequências espirituais do aborto, explicando a responsabilidade moral, a visão da reencarnação e os impactos na vida futura do espírito. Conteúdo voltado ao esclarecimento e prevenção."
    },
    {
        id: 1000002,
        slug: "animais",
        name: "Animais",
        description:
            "Explora a sensibilidade dos animais, sua evolução espiritual, instintos, afetividade e papel no mundo. Aborda também a ética e o cuidado responsável segundo a ótica espírita."
    },
    {
        id: 1000003,
        slug: "arte",
        name: "Arte",
        description:
            "Destaca manifestações artísticas inspiradas pela espiritualidade: música, poesia, pintura e literatura mediúnica. Reúne obras que unem beleza estética e elevação moral."
    },
    {
        id: 1000004,
        slug: "autoajuda",
        name: "Autoconhecimento",
        description:
            "Tema central para o desenvolvimento pessoal: virtudes, transformação moral, comportamento, disciplina emocional e esforço interior para melhorar-se."
    },
    {
        id: 1000005,
        slug: "biografia",
        name: "Biografia",
        description:
            "Narrativas reais e biografias de espíritas notáveis, trazendo inspiração, exemplos de vida e registros históricos do movimento espírita."
    },
    {
        id: 1000006,
        slug: "caridade",
        name: "Caridade",
        description:
            "Reúne obras dedicadas ao serviço ao próximo, práticas de voluntariado, ações assistenciais e desenvolvimento da compaixão."
    },
    {
        id: 1000007,
        slug: "ciencia",
        name: "Ciência e Filosofia",
        description:
            "Faz a ponte entre espiritualidade, razão e ciência moderna, discutindo energia, consciência, leis naturais e fenômenos psíquicos com embasamento filosófico."
    },
    {
        id: 1000008,
        slug: "desobsessao",
        name: "Obsessão e Desobsessão",
        description:
            "Reúne obras que explicam os mecanismos das influências espirituais negativas, seu diagnóstico e a terapêutica recomendada pelo Espiritismo, incluindo reuniões de desobsessão, prece e reforma íntima."
    },
    {
        id: 1000009,
        slug: "dor",
        name: "Dor",
        description:
            "Livros que explicam o sofrimento humano sob a luz da espiritualidade, oferecendo esperança, compreensão e apoio emocional."
    },
    {
        id: 1000010,
        slug: "doutrinacao",
        name: "Doutrinação",
        description:
            "Focado em reuniões mediúnicas, diálogo com espíritos sofredores, práticas doutrinárias, técnicas de esclarecimento e princípios de assistência espiritual."
    },
    {
        id: 1000011,
        slug: "eco",
        name: "Ecologia e Meio Ambiente",
        description:
            "Temas sobre preservação, responsabilidade espiritual com o planeta, consciência ecológica e respeito ao reino natural."
    },
    {
        id: 1000012,
        slug: "estudo",
        name: "Palestras e Estudos",
        description:
            "Materiais que orientam o estudo sistematizado, grupos de estudo, oratória, didática espírita e formação continuada de trabalhadores."
    },
    {
        id: 1000013,
        slug: "evangelho-no-lar",
        name: "Evangelho no Lar",
        description:
            "Prática doméstica do Evangelho, preces coletivas familiares, harmonia no ambiente e rotina espiritual do lar."
    },
    {
        id: 1000014,
        slug: "familia",
        name: "Família",
        description:
            "Trata dos laços familiares sob a ótica reencarnacionista, desafios da convivência, missão dos pais e filhos, e o papel do amor na evolução espiritual."
    },
    {
        id: 1000015,
        slug: "fenomenos",
        name: "Fenômenos Espirituais",
        description:
            "Estudos sobre aparições, materializações, psicografia, clarividência, cura espiritual e outros fenômenos investigados pela ciência e pela mediunidade."
    },
    {
        id: 1000016,
        slug: "infancia",
        name: "Infância e Juventude",
        description:
            "Obras educativas para o público infantojuvenil, com histórias, ilustrações e ensinamentos de moral cristã."
    },
    {
        id: 1000017,
        slug: "justica",
        name: "Justiça Divina",
        description:
            "Estudos sobre carma, lei de causa e efeito, expiações e provas, explicando a lógica universal que governa as experiências humanas."
    },
    {
        id: 1000018,
        slug: "lideranca",
        name: "Liderança e Gestão",
        description:
            "Aborda organização da Casa Espírita, relações de equipe, ética da liderança, administração de grupos mediúnicos e gestão de atividades doutrinárias e assistenciais."
    },
    {
        id: 1000019,
        slug: "mediunidade",
        name: "Mediunidade",
        description:
            "Abrange estudos técnicos e práticos sobre a comunicação entre encarnados e desencarnados. Inclui tipos de mediunidade, segurança mediúnica, desenvolvimento e práticas nos centros espíritas."
    },
    {
        id: 1000020,
        slug: "morte",
        name: "Morte e Luto",
        description:
            "Textos sobre o processo de desencarne, compreensão espiritual da morte, acolhimento emocional, superação da dor e continuidade da vida após a separação física."
    },
    {
        id: 1000021,
        slug: "mundo-espiritual",
        name: "Vida no Mundo Espiritual",
        description:
            "Obras que descrevem a realidade dos desencarnados: colônias, trabalho espiritual, aprendizado pós‑morte, e funcionamento do plano espiritual."
    },
    {
        id: 1000022,
        slug: "oratoria",
        name: "Oratória",
        description:
            "Oratória, escrita, divulgação, palestras, linguagem adequada, comunicação fraterna e expressão doutrinária eficaz."
    },
    {
        id: 1000023,
        slug: "passe",
        name: "Passe e Magnetismo",
        description:
            "Aborda a prática do passe, fluidoterapia, equilíbrio energético e técnicas magnéticas, com base em teoria e prática."
    },
    {
        id: 1000024,
        slug: "prece",
        name: "Prece",
        description:
            "Estudos sobre o poder da oração, sintonia, emissão de boas energias, fortalecimento espiritual e terapêutica vibracional."
    },
    {
        id: 1000042,
        slug: "jesus",
        name: "Jesus",
        description:
            "Estudos profundos e interpretações da vida de Jesus sob a chave da reencarnação e do progresso moral."
    },
    {
        id: 1000025,
        slug: "progresso",
        name: "Progresso",
        description:
            "Reflexões sobre o progresso planetário, transição, regeneração e destino espiritual da Terra segundo as leis divinas."
    },
    {
        id: 1000026,
        slug: "psicologia",
        name: "Psicologia",
        description:
            "Integra conceitos psicológicos com princípios espirituais, abordando autoconhecimento, emoções, saúde mental, traumas e evolução da alma."
    },
    {
        id: 1000027,
        slug: "reencarnacao",
        name: "Reencarnação",
        description:
            "Estudo profundo das vidas sucessivas, leis de causa e efeito, planejamento reencarnatório e provas e expiações que impulsionam o crescimento da alma."
    },
    {
        id: 1000028,
        slug: "religioes",
        name: "Religiões",
        description:
            "Explora o diálogo entre a Doutrina Espírita e outras tradições religiosas, buscando convergências morais e pontos de encontro."
    },
    {
        id: 1000029,
        slug: "revista-espirita",
        name: "Revista Espírita",
        description:
            "Coletâneas de estudos, artigos, debates e observações publicados originalmente por Allan Kardec, fundamentais para compreender o desenvolvimento histórico e a aplicação prática da Doutrina."
    },
    {
        id: 1000030,
        slug: "saude",
        name: "Saúde",
        description:
            "Trata da relação entre corpo, mente e espírito, abordando cura, doenças, equilíbrio emocional e influência espiritual na saúde."
    },
    {
        id: 1000031,
        slug: "sexo",
        name: "Sexualidade",
        description:
            "Apresenta uma visão equilibrada sobre sexo, responsabilidade afetiva, casamento, fidelidade, amor, escolhas morais e implicações espirituais do comportamento sexual."
    },
    {
        id: 1000035,
        slug: "criacao-arte",
        name: "Artes",
        description: "Criaçao artística"
    },
    {
        id: 1000043,
        slug: "mensagens",
        name: "Mensagens",
        description:
            "Livros de bolso ou coletâneas de textos curtos e inspiradores voltados para momentos de crise, dor ou desânimo."
    },
    {
        id: 1000044,
        slug: "obras-basicas",
        name: "Obras Básicas",
        description: "Pentateuco de Allan Kardec"
    },
    {
        id: 1000048,
        slug: "revistaespirita",
        name: "Revista Espírita",
        description: "Revista Espírita publicada por Allan Kardec"
    },
    {
        id: 1000050,
        slug: "desdobramento",
        name: "Desdobramento e Emancipação",
        description:
            "Estudo sobre as saídas do corpo físico durante o sono (projeção astral), o trabalho realizado no plano espiritual durante o repouso e a lembrança desses eventos."
    },
    {
        id: 1000051,
        slug: "perispirito",
        name: "Perispírito",
        description: "Estudo técnico sobre a constituição do corpo espiritual"
    },
    {
        id: 1000052,
        slug: "cidades",
        name: "Colônias e Cidades Espirituais",
        description:
            "Relatos detalhados sobre a arquitetura, organização social, hospitais, escolas e governos das colônias que circundam a Terra."
    },
    {
        id: 1000053,
        slug: "umbral",
        name: "Umbral e Zonas de Sofrimento",
        description:
            "Obras que descrevem as regiões de purgação mental e sofrimento pós-morte, explicando como a sintonia vibratória atrai o espírito a esses locais."
    },
    {
        id: 1000054,
        slug: "planejamentoreencarnacao",
        name: "Planejamento Reencarnatório",
        description:
            "Estudo sobre os bastidores da reencarnação: como são escolhidas as famílias, as provas, as limitações físicas e os compromissos antes de renascer."
    },
    {
        id: 1000055,
        slug: "educacaofilhos",
        name: "Educação de Filhos",
        description:
            "Diretrizes para pais sobre como educar os espíritos reencarnados sob sua tutela, lidando com rebeldia, tendências de vidas passadas e formação moral."
    },
    {
        id: 1000056,
        slug: "envelhecimento",
        name: "Envelhecimento",
        description:
            "Reflexões sobre a velhice física como uma etapa rica de colheita espiritual, preparação para o retorno à pátria espiritual e desapego material."
    },
    {
        id: 1000057,
        slug: "vicios",
        name: "Vícios",
        description:
            "Estudo sobre o impacto de sentimentos destrutivos como ciúme, inveja, orgulho, mágoa e egoísmo na economia energética do ser humano bem como o alcoolismo, tabagismo e uso de drogas sob a ótica da obsessão espiritual e da degradação do corpo físico e do perispírito."
    },
    {
        id: 1000058,
        slug: "infantil",
        name: "Literatura Infantil",
        description:
            "Obras com foco pedagógico e ilustrativo voltadas para crianças pequenas (moral cristã, amor à natureza, respeito aos pais, etc)."
    },
    {
        id: 1000059,
        slug: "infanto-juvenil",
        name: "Literatura Infantojuvenil",
        description:
            "Histórias e romances adaptados para adolescentes, tratando de dilemas da juventude, amizade, escolhas e espiritualidade de forma leve."
    },
    {
        id: 1000060,
        slug: "suicidio",
        name: "Suicídio",
        description:
            "Obras dedicadas a alertar sobre as trágicas consequências espirituais do suicídio, oferecendo amparo, esperança e valorização da vida."
    },
    {
        id: 1000061,
        slug: "transtornomental",
        name: "Transtornos Mentais",
        description:
            "A fronteira entre a psiquiatria tradicional e a influência espiritual, identificando quando o distúrbio é orgânico, psíquico ou obsessivo."
    },
    {
        id: 1000062,
        slug: "atendimento",
        name: "Atendimento Fraterno",
        description:
            "Diretrizes e técnicas de escuta ativa e acolhimento para voluntários que recebem pessoas em sofrimento na Casa Espírita."
    },
    {
        id: 1000063,
        slug: "personagensbiblicos",
        name: "Personagens Bíblicos",
        description:
            "Análise da vida de profetas, apóstolos e figuras do Velho e Novo Testamento sob a ótica histórica e mediúnica."
    },
    {
        id: 1000064,
        slug: "perdao",
        name: "Perdão e Reconciliação",
        description:
            "Aborda a necessidade do perdão (a si mesmo e aos outros) como ferramenta de cura mental, desatar de laços cármicos e libertação espiritual."
    },
    {
        id: 1000037,
        slug: "evangelho",
        name: "Evangelho",
        description:
            "Estudos profundos e interpretações da vida de Jesus sob a chave da reencarnação e do progresso moral."
    },
    {
        id: 1000065,
        slug: "paciencia",
        name: "Paciência",
        description:
            "Estudo sobre o valor de saber esperar o tempo das coisas e aceitar as provações difíceis sem revolta, buscando compreender o seu propósito."
    },
    {
        id: 1000033,
        slug: "codificacao",
        name: "Codificação Espírita",
        description:
            "Obras que analisam, comentam ou servem de guia de estudo para os cinco livros fundamentais da Codificação de Allan Kardec"
    },
    {
        id: 1000047,
        slug: "poesia",
        name: "Poesia",
        description:
            "Coletâneas de poemas ditados por poetas desencarnados, expressando beleza, saudade, fé e ensinamentos morais em versos."
    },
    {
        id: 1000049,
        slug: "romance",
        name: "Romance",
        description: "Narrativas ficcionais ou reais baseadas em encarnações passadas"
    },
    {
        id: 1000038,
        slug: "evangelizacao",
        name: "Evangelização Espírita",
        description:
            "Manuais, dinâmicas e planos de aula para evangelizadores que atuam na formação moral de crianças e jovens nas instituições espíritas."
    }
];

const categorySlugs = categories.map((c) => c.slug);
const tagSlugs = tags.map((t) => t.slug);

module.exports = {
    // Operações de Consumo
    // async getVolumeEnhancedInfo(volume) {
    //     try {
    //         const vol = {
    //             year: volume.year,
    //             edition: volume.edition,
    //             isbn_13: volume.isbn,
    //             isbn_10: volume.isbn_old,
    //             pages: volume.pages,
    //             publisher: volume.publisher?.name || "Não informada",
    //             title: volume.book.title,
    //             description: volume.book.description,
    //             authors: []
    //         };

    //         let authorsWritten = "";

    //         for (let i in volume.authors) {
    //             authorsWritten += `${volume.authors[i].name}, `;
    //             vol.authors.push({
    //                 name: volume.authors[i].name
    //             });
    //         }

    //         const schema = {
    //             type: "OBJECT",
    //             properties: {
    //                 summary: {
    //                     type: "STRING",
    //                     description:
    //                         "Um resumo detalhado e fiel focado no conteúdo doutrinário do livro em até 500 palavras."
    //                 },
    //                 description: {
    //                     type: "STRING",
    //                     description:
    //                         "Uma breve frase comercial de impacto para exibição rápida que chame a atenção para que as pessoas queiram ler."
    //                 },
    //                 recommended_for: {
    //                     type: "STRING",
    //                     description: "Um parágrafo indicando o leitor ideal para este livro."
    //                 },
    //                 category: {
    //                     type: "STRING",
    //                     enum: categorySlugs, // Força a IA a escolher uma destas
    //                     description: "Selecione a categoria correspondente ao livro."
    //                 },
    //                 tags: {
    //                     type: "ARRAY",
    //                     items: {
    //                         type: "STRING",
    //                         enum: tagSlugs // Força a IA a escolher itens desta lista
    //                     },
    //                     description: "Selecione todos os temas doutrinários que tenham relação com o livro."
    //                 },
    //                 keywords: {
    //                     type: "ARRAY",
    //                     items: { type: "STRING" },
    //                     description:
    //                         "até 20 palavras-chave cruciais para busca, termos que possam ter relaçao com os assuntos abordados."
    //                 }
    //             },
    //             required: ["summary", "description", "recommended_for", "category", "tags", "keywords"]
    //         };

    //         const model = genAI.getGenerativeModel({
    //             model: "gemini-3.5-flash",
    //             generationConfig: {
    //                 responseMimeType: "application/json",
    //                 responseSchema: schema
    //             }
    //         });

    //         const prompt = `Você é um bibliotecário especialista em literatura espírita clássica e contemporânea.
    //             Sua tarefa é analisar a obra fornecida abaixo e gerar metadados ricos e doutrinariamente precisos.
    //             DADOS DO LIVRO:
    //             - Título: "${vol.title}"
    //             - Edição: "${vol.edition}"
    //             - Ano: "${vol.year}"
    //             - Autores: "${authorsWritten.slice(0, -2)}"
    //             - ISBN: "${vol.isbn_13 || vol.isbn_10}"
    //             - Resumo Base: "${(vol.description || "").replaceAll('"', "")}"
    //             DIRETRIZES DE CONFIABILIDADE:
    //             1. Baseie-se estritamente em fatos reais sobre a obra literária indicada.
    //             2. Se você não souber dados reais sobre esta obra, use apenas as informações fornecidas no resumo simples para estruturar a resposta, sem inventar.`;

    //         // return prompt;

    //         const result = await model.generateContent(prompt);
    //         const response = await result.response;
    //         const jsonTexto = response.text();

    //         return JSON.parse(jsonTexto);
    //     } catch (err) {
    //         console.log(err);
    //         return parseError(err);
    //     }
    // },

    async getVolumeEnhancedInfo(book) {
        try {
            const bookData = {
                isbn_13: book.isbn,
                isbn_10: book.isbn_old,
                publisher: book.publisher?.name || "Não informada",
                title: book.title,
                description: book.description,
                authors: []
            };

            let authorsWritten = "";

            for (let i in book.authors) {
                authorsWritten += `${book.authors[i].name}, `;
                bookData.authors.push({
                    name: book.authors[i].name
                });
            }

            const schema = {
                type: "OBJECT",
                properties: {
                    summary: {
                        type: "STRING",
                        description:
                            "Um resumo detalhado e fiel focado no conteúdo doutrinário do livro em até 500 palavras."
                    },
                    description: {
                        type: "STRING",
                        description:
                            "Uma breve frase comercial de impacto para exibição rápida que chame a atenção para que as pessoas queiram ler."
                    },
                    recommended_for: {
                        type: "STRING",
                        description: "Um parágrafo indicando o leitor ideal para este livro."
                    },
                    category: {
                        type: "STRING",
                        enum: categorySlugs, // Força a IA a escolher uma destas
                        description: "Selecione a categoria correspondente ao livro."
                    },
                    tags: {
                        type: "ARRAY",
                        items: {
                            type: "STRING",
                            enum: tagSlugs // Força a IA a escolher itens desta lista
                        },
                        description: "Selecione todos os temas doutrinários que tenham relação com o livro."
                    },
                    keywords: {
                        type: "ARRAY",
                        items: { type: "STRING" },
                        description:
                            "até 20 palavras-chave cruciais para busca, termos que possam ter relaçao com os assuntos abordados."
                    }
                },
                required: ["summary", "description", "recommended_for", "category", "tags", "keywords"]
            };

            const model = genAI.getGenerativeModel({
                model: "gemini-3.5-flash",
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: schema
                }
            });

            const prompt = `Você é um bibliotecário especialista em literatura espírita clássica e contemporânea.
                Sua tarefa é analisar a obra fornecida abaixo e gerar metadados ricos e doutrinariamente precisos.
                DADOS DO LIVRO:
                - Título: "${bookData.title}"
                - Autores: "${authorsWritten.slice(0, -2)}"
                - ISBN: "${bookData.isbn_13 || bookData.isbn_10}"
                - Resumo Base: "${(bookData.description || "").replaceAll('"', "")}"
                DIRETRIZES DE CONFIABILIDADE:
                1. Baseie-se estritamente em fatos reais sobre a obra literária indicada.
                2. Se você não souber dados reais sobre esta obra, use apenas as informações fornecidas no resumo simples para estruturar a resposta, sem inventar.`;

            // return prompt;

            console.log(`Calling for '${book.slug}':`);
            for (let i = 0; i < NUMBER_OF_RETRIES; i++) {
                try {
                    const result = await model.generateContent(prompt);
                    const response = await result.response;
                    const jsonTexto = response.text();

                    return JSON.parse(jsonTexto);
                } catch (err) {
                    console.log(`\tError on the ${i + 1}* call: `, err.message);
                    if (i < NUMBER_OF_RETRIES) continue;
                    else return parseError(err);
                }
            }
        } catch (err) {
            return parseError(err);
        }
    },

    async getPublisherEnhancedInfo(publisher) {
        try {
            const publisherData = {
                name: publisher.name
            };

            const schema = {
                type: "OBJECT",
                properties: {
                    abbreviation: {
                        type: "STRING",
                        description:
                            "A abreviação ou sigla da editora levando em consideração os simbolos e caracteres maiusculos e minusculos."
                    },
                    description: {
                        type: "STRING",
                        description: "Um resumo detalhado"
                    },
                    recommended_for: {
                        type: "STRING",
                        description: "Um parágrafo indicando o leitor ideal para este livro."
                    },
                    category: {
                        type: "STRING",
                        enum: categorySlugs, // Força a IA a escolher uma destas
                        description: "Selecione a categoria correspondente ao livro."
                    },
                    tags: {
                        type: "ARRAY",
                        items: {
                            type: "STRING",
                            enum: tagSlugs // Força a IA a escolher itens desta lista
                        },
                        description: "Selecione todos os temas doutrinários que tenham relação com o livro."
                    },
                    keywords: {
                        type: "ARRAY",
                        items: { type: "STRING" },
                        description:
                            "até 20 palavras-chave cruciais para busca, termos que possam ter relaçao com os assuntos abordados."
                    }
                },
                required: ["summary", "description", "recommended_for", "category", "tags", "keywords"]
            };

            const model = genAI.getGenerativeModel({
                model: "gemini-3.5-flash",
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: schema
                }
            });

            const prompt = `Você é um bibliotecário especialista em literatura espírita clássica e contemporânea.
                Sua tarefa é analisar a obra fornecida abaixo e gerar metadados ricos e doutrinariamente precisos.
                DADOS DO LIVRO:
                - Título: "${bookData.title}"
                - Autores: "${authorsWritten.slice(0, -2)}"
                - ISBN: "${bookData.isbn_13 || bookData.isbn_10}"
                - Resumo Base: "${(bookData.description || "").replaceAll('"', "")}"
                DIRETRIZES DE CONFIABILIDADE:
                1. Baseie-se estritamente em fatos reais sobre a obra literária indicada.
                2. Se você não souber dados reais sobre esta obra, use apenas as informações fornecidas no resumo simples para estruturar a resposta, sem inventar.`;

            // return prompt;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const jsonTexto = response.text();

            return JSON.parse(jsonTexto);
        } catch (err) {
            console.log(err);
            return parseError(err);
        }
    }
};
