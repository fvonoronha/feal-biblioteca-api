-- AlterTable
-- CPF (somente dígitos) do usuário. Opcional e único: usuários antigos não têm esse dado,
-- e múltiplos NULLs não violam a constraint UNIQUE do Postgres.
ALTER TABLE "user" ADD COLUMN "document" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_document_key" ON "user"("document");
