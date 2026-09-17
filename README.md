<p align="center">
  <img src="docs/logo-feal.png" alt="FEAL - Fraternidade Espírita Amor e Luz" width="100"/>
</p>

<h1 align="center">
Biblioteca FEAL — API
</h1>

<p align="center">
Backend do sistema de gerenciamento do acervo da Biblioteca Francisco Cândido Xavier, da Fraternidade Espírita Amor e Luz (FEAL).
</p>

## Sobre o projeto

Esta API dá suporte ao site e ao painel administrativo da **Biblioteca Francisco Cândido Xavier**, mantida pela FEAL: catalogação de livros e volumes/exemplares, autores, categorias, temas e editoras; controle de empréstimos; cadastro e autenticação de usuários; e busca pública ao acervo.

A leitura sempre foi um dos grandes instrumentos de esclarecimento espiritual. Ao tornar o acervo acessível, este projeto busca incentivar o estudo, a reflexão e o contato com obras que ajudam a compreender melhor a vida espiritual e os ensinamentos do Evangelho. É mantido para apoiar as atividades da biblioteca da FEAL — sugestões de melhoria e contribuições são sempre bem-vindas.

Este repositório contém apenas o **backend**. O frontend que o consome vive em [`feal-biblioteca-web`](../feal-biblioteca-web).

## Principais funcionalidades

- CRUD completo de livros, volumes/exemplares, autores, categorias, temas e editoras.
- Empréstimos: registro, renovação, devolução, e cálculo de atraso.
- Autenticação por CPF (JWT), com fluxo de recuperação de senha por e-mail e pré-cadastro de usuários pelo bibliotecário.
- Busca pública com relevância, filtros combináveis (categoria/tema/autor/editora) e paginação/ordenação.
- Enriquecimento de metadados de livros assistido por IA (Google Gemini) - sugestão de resumo, descrição, categoria e temas, sempre sujeita a revisão humana antes de ser salva.
- Envio de e-mails transacionais (SMTP) e job periódico de atualização de estatísticas de acesso.

## Stack

- [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/) via [Prisma](https://www.prisma.io/) - a maioria das consultas usa `$queryRaw` diretamente (SQL nomeado, não o query builder) por controle fino de performance; o client do Prisma é usado para mutações simples
- [Zod](https://zod.dev/) para validação de payloads
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) + [bcrypt](https://github.com/kelektiv/node.bcrypt.js) para autenticação
- [Helmet](https://helmetjs.github.io/) + [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) para segurança básica
- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) (Gemini) para o enriquecimento de metadados
- [node-cron](https://www.npmjs.com/package/node-cron) para jobs agendados, [Nodemailer](https://nodemailer.com/) para e-mail

## Estrutura do projeto

Cada domínio de negócio é uma pasta própria em `src/`, sempre com o mesmo formato interno:

```
src/<dominio>/
├── controller/   # Valida entrada (Zod), chama o service, monta req.response.body
├── service/      # Regras de negócio e acesso a dados (Prisma / $queryRaw)
└── router/       # Define as rotas Express e o middleware de autorização de cada uma

src/
├── account/      # Criação de conta / auto-registro de usuário
├── auth/         # Login, sessão, recuperação de senha
├── author/
├── book/         # Livro (dados que não mudam entre edições: título, resumo, categoria...)
├── category/
├── gemini/       # Sugestão de metadados via IA (não grava nada sozinho - ver abaixo)
├── loan/         # Empréstimos de volumes
├── publisher/
├── tag/
├── user/
├── volume/       # Volume/exemplar físico (um livro pode ter vários: edições, cópias)
└── utils/        # Serviços compartilhados: request/response, paginação, permissões,
                   # criptografia, e-mail, schemas Zod comuns, etc.
prisma/
├── schema.prisma
└── migrations/   # Migrações versionadas manualmente (ver seção "Banco de dados" abaixo)
docs/             # Coleção Bruno (bruno/) e outros materiais de apoio
```

Um livro (`book`) guarda os dados que não mudam entre edições (título, resumo, categoria, temas); cada exemplar físico é um `volume`, com sua própria editora, ano, ISBN, etc. - um livro pode ter vários volumes.

### Convenção de cada rota

Toda rota segue a mesma cadeia de middlewares: `init` (monta `req.response`) → autenticação/autorização → handler do controller → `end` (serializa a resposta). O corpo de toda resposta segue o mesmo envelope:

```jsonc
{
  "header": { /* metadados da requisição */ },
  "body": {
    "<recurso>": { /* dados, ou { "error": [...] } em caso de falha de validação/negócio */ }
  }
}
```

As rotas são carregadas automaticamente: qualquer arquivo `src/<dominio>/router/*.router.js` é importado e montado por `expressService.importRoutes` no boot do servidor (ver `server.js`) - não é preciso registrar rotas novas manualmente em nenhum lugar central.

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- Um banco [PostgreSQL](https://www.postgresql.org/) acessível

### Passo a passo

```bash
npm install

cp .env.example .env   # preencha DATABASE e os demais valores (veja a tabela abaixo)

npx prisma generate
npx prisma migrate deploy   # aplica as migrações já existentes

npm run dev
```

O servidor sobe na porta definida em `PORT` (padrão `3000`) e imprime as rotas carregadas no boot.

> ⚠️ **Nunca use `prisma migrate dev`** neste projeto. As migrações são escritas manualmente em `prisma/migrations/` e aplicadas com `prisma migrate deploy` - `migrate dev` pode tentar recriar o histórico de migração e entrar em conflito com o que já existe no banco. Ao alterar o schema, crie a migração SQL à mão seguindo o padrão das pastas já existentes.

### Variáveis de ambiente

Veja `.env.example` para a lista completa, com comentários explicando cada uma. As mais importantes:

| Variável                    | Obrigatória | Descrição                                                                                     |
| ---------------------------- | :----------: | ------------------------------------------------------------------------------------------------ |
| `PORT`                       |      ✅      | Porta em que o servidor escuta.                                                                |
| `DATABASE`                   |      ✅      | Connection string do PostgreSQL (parâmetros de pool via query string, ex. `connection_limit`). |
| `CRYPTOGRAPHY_SECRET`        |      ✅      | Chave usada para assinar JWTs e derivar a chave de criptografia.                                |
| `CRYPTOGRAPHY_ROUNDS_OF_SALT`|      ✅      | Rounds de salt do bcrypt para senhas.                                                          |
| `JWT_EXPIRES_IN`             |              | Validade do token de login (padrão `7d`).                                                      |
| `GEMINI_API_KEY`             |              | Chave da API do Google Gemini - necessária apenas para o módulo de enriquecimento por IA.      |
| `WEB_URL`                    |      ✅      | URL pública do frontend, usada nos e-mails enviados e como origem padrão de CORS.               |
| `CORS_ORIGINS`                |              | Lista de origens autorizadas via CORS, separadas por vírgula. Vazio + produção = bloqueia tudo.|
| `SMTP_SERVER_*`               |      ✅      | Configuração do servidor de e-mail transacional (boas-vindas, redefinição de senha).            |
| `ENABLE_CRON_JOBS`            |              | Liga/desliga o job periódico de estatísticas de acesso (padrão `true`).                        |
| `PRISMA_LOG`                  |              | Liga o log de queries do Prisma no console. Deixe `false` em produção.                          |

**Nunca** commite o arquivo `.env` (ele já está no `.gitignore`) - use sempre o `.env.example` como referência de quais chaves existem.

## Scripts disponíveis

| Comando                  | O que faz                                                          |
| --------------------------- | ---------------------------------------------------------------------- |
| `npm run dev`               | Inicia com `nodemon` (reinicia sozinho a cada alteração).             |
| `npm start`                 | Inicia em modo produção (`node server.js`, sem watch).                |
| `npm run prisma:validate`   | Valida `schema.prisma`.                                               |
| `npm run prisma:generate`   | Gera o Prisma Client a partir do schema.                              |
| `npx prisma migrate deploy` | Aplica as migrações pendentes ao banco configurado em `DATABASE`.     |

## Banco de dados

O schema fica em `prisma/schema.prisma`; os principais modelos são `User`, `Author`, `Book`, `Volume`, `VolumeLoan`, `Category`, `Tag` e `Publisher` (mais tabelas de junção como `VolumeAuthor` e `BookTag`). A maior parte das consultas de leitura usa SQL bruto (`db.$queryRaw`) diretamente nos services, não o query builder do Prisma - então ao alterar uma coluna usada em algum `$queryRaw`, procure por ela em `src/**/service/*.service.js` além de checar o schema.

Colunas `search_*` (ex.: `search_title`, `search_name`) guardam uma versão normalizada (sem acento, minúscula) do campo correspondente, usada para busca com `~*`. Elas não são geradas automaticamente pelo banco - todo código que cria ou atualiza uma dessas linhas precisa preenchê-las também (veja `normalizeSearchText`/`buildSearchText` em `src/utils/string.service.js`).

## Autorização

A maior parte das rotas de gerenciamento de catálogo (livros, volumes, autores, categorias, temas, editoras) exige `ADMIN` ou `LIBRARIAN`. Ações mais sensíveis - mudar papel/status de um usuário, ou chamar o Gemini (API paga) - exigem `ADMIN`. Veja `src/utils/permission.service.js` (`hasRole`, `isAdmin`) e como cada `*.router.js` usa esses middlewares.

## Testando a API

Uma coleção pronta para o [Bruno](https://www.usebruno.com/) (cliente HTTP local, alternativa ao Postman) está em `bruno/workspace` - abra a pasta no Bruno para explorar e testar as rotas manualmente.

## Docker

```bash
docker compose up --build
```

Para rodar as migrações automaticamente na subida do container, defina `PRISMA_MIGRATIONS_RUN=1` (ver `entrypoint.sh`); caso contrário, rode `npx prisma migrate deploy` manualmente antes.

## Contribuindo

Sugestões, correções e novas funcionalidades são bem-vindas. Abra uma issue descrevendo o problema/ideia antes de um PR maior, para alinhar o escopo. Ao adicionar um recurso novo, siga a convenção existente (`controller/service/router` por domínio) e escreva a migração do banco manualmente, sem usar `prisma migrate dev`.

## Licença

Distribuído sob a licença GNU GPLv3 - veja [`LICENSE`](./LICENSE).
