## Comando obrigatório
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
# FROM node:16
FROM node:22-alpine

ARG APP_VERSION
ARG GIT_COMMIT
ENV APP_VERSION=${APP_VERSION}
ENV GIT_COMMIT=${GIT_COMMIT}
ENV PRISMA_MIGRATIONS_RUN=0

## Define o local onde o app vai ficar no disco do container
## Pode ser o diretório que você quiser
WORKDIR /usr/app

## Copia tudo que começa com package e termina com .json para dentro da pasta /usr/app
COPY package*.json ./

## Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install --omit=dev --unsafe-perm --include=optional sharp
# RUN npm install --unsafe-perm --include=optional sharp

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/app do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

## Gera os arquivos do Prisma
RUN npx prisma generate

## Gera os arquivos do Prisma DW
RUN npx prisma generate --schema=prisma-dw/schema.prisma

## Adiciona permissão de execução ao entrypoint
RUN chmod +x /usr/app/entrypoint.sh

## Define o entrypoint
ENTRYPOINT ["/usr/app/entrypoint.sh"]

## Container ficará ouvindo os acessos na porta 3000
EXPOSE 3000

## Não se repete no Dockerfile
## Executa o comando npm start para iniciar o script que que está no package.json
CMD ["npm", "start"]

# Nao sei se precisa desse halthcheck

# Define a healthcheck para verificar se o serviço está rodando
# A healthcheck executa o script healthcheck.sh a cada 10 segundos
# RUN chmod +x /usr/app/healthcheck.sh
# HEALTHCHECK --interval=10s --timeout=30s --start-period=5s --retries=3 CMD [ "/usr/app/healthcheck.sh" ]