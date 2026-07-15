-- AlterTable
ALTER TABLE "author" ADD COLUMN     "search_name" TEXT;

-- AlterTable
ALTER TABLE "category" ADD COLUMN     "search_name" TEXT;

-- AlterTable
ALTER TABLE "publisher" ADD COLUMN     "search_name" TEXT;

-- AlterTable
ALTER TABLE "tag" ADD COLUMN     "search_name" TEXT;

-- CreateIndex
CREATE INDEX "author_search_name_idx" ON "author"("search_name");

-- CreateIndex
CREATE INDEX "category_search_name_idx" ON "category"("search_name");

-- CreateIndex
CREATE INDEX "publisher_search_name_idx" ON "publisher"("search_name");

-- CreateIndex
CREATE INDEX "tag_search_name_idx" ON "tag"("search_name");
