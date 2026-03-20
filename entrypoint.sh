#!/bin/sh

echo "Entrypoint iniciado"
echo "- GIT_COMMIT=$GIT_COMMIT"
echo "- APP_VERSION=$APP_VERSION"
echo "- NODE_VERSION=$NODE_VERSION"

# Verifica se a variável PRISMA_MIGRATIONS_RUN está definida como 1
if [ "$PRISMA_MIGRATIONS_RUN" = "1" ]; then
    echo "Executando migrações do Prisma..."
    npx prisma migrate deploy
    if [ $? -ne 0 ]; then
        echo "Erro ao executar as migrações do Prisma"
        exit 1
    fi
    echo "Migrações do Prisma concluídas com sucesso"
fi

# clean /usr/app/temp folder
if [ -d "/usr/app/temp" ]; then
    echo "Limpando a pasta /usr/app/temp..."
    find /usr/app/temp -type f -mtime +0 -exec rm -f {} \;
    echo "Pasta /usr/app/temp limpa"
fi

# Executa o comando passado como argumento (CMD do Dockerfile)
echo "Executando comando principal..."
exec "$@"
