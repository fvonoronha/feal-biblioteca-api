-- AlterTable
ALTER TABLE "book" ADD COLUMN     "all_time_access_count" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "all_time_access_count_updated_at" TIMESTAMPTZ(6),
ADD COLUMN     "category_id" BIGINT,
ADD COLUMN     "last_week_access_count" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "last_week_access_count_updated_at" TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "book_access" ADD COLUMN     "browser_name" TEXT,
ADD COLUMN     "browser_version" TEXT,
ADD COLUMN     "device_name" TEXT,
ADD COLUMN     "device_vendor" TEXT,
ADD COLUMN     "ip_address" TEXT,
ADD COLUMN     "os_name" TEXT,
ADD COLUMN     "os_version" TEXT,
ADD COLUMN     "user_agent" TEXT;

-- CreateTable
CREATE TABLE "category" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "name" TEXT NOT NULL,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "description" TEXT,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_id_key" ON "category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "category_slug_key" ON "category"("slug");

-- CreateIndex
CREATE INDEX "category_status_idx" ON "category"("status");

-- CreateIndex
CREATE INDEX "category_name_idx" ON "category"("name");

-- CreateIndex
CREATE INDEX "book_all_time_access_count_idx" ON "book"("all_time_access_count");

-- CreateIndex
CREATE INDEX "book_last_week_access_count_idx" ON "book"("last_week_access_count");

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Params
ALTER SEQUENCE category_id_seq RESTART WITH 1000001;