-- AlterTable
ALTER TABLE "book" ADD COLUMN     "last_month_access_count" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "last_month_access_count_updated_at" TIMESTAMPTZ(6);

-- CreateIndex
CREATE INDEX "book_keywords_idx" ON "book"("keywords");

-- CreateIndex
CREATE INDEX "book_last_month_access_count_idx" ON "book"("last_month_access_count");

-- CreateIndex
CREATE INDEX "book_access_created_at_idx" ON "book_access"("created_at");

-- CreateIndex
CREATE INDEX "book_access_book_id_created_at_idx" ON "book_access"("book_id", "created_at");
