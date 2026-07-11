-- AlterTable
ALTER TABLE "publisher" ADD COLUMN     "abbreviation" TEXT;

-- CreateIndex
CREATE INDEX "publisher_abbreviation_idx" ON "publisher"("abbreviation");
