-- AlterTable
-- Necessário para o modal público de detalhes do autor (data de nascimento/falecimento).
ALTER TABLE "author" ADD COLUMN "birth_date" DATE;
ALTER TABLE "author" ADD COLUMN "death_date" DATE;
