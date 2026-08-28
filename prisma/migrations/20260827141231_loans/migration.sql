-- AlterEnum
ALTER TYPE "StatusEnum" ADD VALUE 'P';

-- DropIndex
DROP INDEX "user_email_key";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "phone" TEXT,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'MEMBER';

-- CreateTable
CREATE TABLE "volume_loan" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "volume_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "loan_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "due_date" TIMESTAMP(3) NOT NULL,
    "return_date" TIMESTAMP(3),
    "description" TEXT,

    CONSTRAINT "volume_loan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "volume_loan_id_key" ON "volume_loan"("id");

-- CreateIndex
CREATE INDEX "volume_loan_status_idx" ON "volume_loan"("status");

-- CreateIndex
CREATE INDEX "volume_loan_volume_id_idx" ON "volume_loan"("volume_id");

-- CreateIndex
CREATE INDEX "volume_loan_user_id_idx" ON "volume_loan"("user_id");

-- AddForeignKey
ALTER TABLE "volume_loan" ADD CONSTRAINT "volume_loan_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_loan" ADD CONSTRAINT "volume_loan_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_loan" ADD CONSTRAINT "volume_loan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_loan" ADD CONSTRAINT "volume_loan_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Params
ALTER SEQUENCE volume_loan_id_seq RESTART WITH 1000001;