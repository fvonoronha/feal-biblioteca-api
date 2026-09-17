-- AlterTable
-- "Renovar" fecha o empréstimo atual e cria um novo igual; esta coluna aponta o novo
-- empréstimo de volta para o que ele substituiu, para exibir "renovado a partir do
-- empréstimo #X" na listagem administrativa sem precisar adivinhar pela data/descrição.
ALTER TABLE "volume_loan" ADD COLUMN "renewed_from_loan_id" BIGINT;

-- CreateIndex
CREATE INDEX "volume_loan_renewed_from_loan_id_idx" ON "volume_loan"("renewed_from_loan_id");

-- AddForeignKey
ALTER TABLE "volume_loan" ADD CONSTRAINT "volume_loan_renewed_from_loan_id_fkey" FOREIGN KEY ("renewed_from_loan_id") REFERENCES "volume_loan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
