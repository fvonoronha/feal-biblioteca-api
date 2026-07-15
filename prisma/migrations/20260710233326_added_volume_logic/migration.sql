/*
  Warnings:

  - You are about to drop the column `back_url` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `cover_url` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `edition` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `images_url` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `isbn` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `pages` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `pdf_url` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `shelf` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `book` table. All the data in the column will be lost.
  - You are about to drop the `book_access` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `book_author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `loan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "book_access" DROP CONSTRAINT "book_access_book_id_fkey";

-- DropForeignKey
ALTER TABLE "book_access" DROP CONSTRAINT "book_access_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "book_author" DROP CONSTRAINT "book_author_author_id_fkey";

-- DropForeignKey
ALTER TABLE "book_author" DROP CONSTRAINT "book_author_book_id_fkey";

-- DropForeignKey
ALTER TABLE "book_author" DROP CONSTRAINT "book_author_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "book_author" DROP CONSTRAINT "book_author_updated_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "loan" DROP CONSTRAINT "loan_book_id_fkey";

-- DropForeignKey
ALTER TABLE "loan" DROP CONSTRAINT "loan_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "loan" DROP CONSTRAINT "loan_updated_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "loan" DROP CONSTRAINT "loan_user_id_fkey";

-- DropIndex
DROP INDEX "book_edition_idx";

-- DropIndex
DROP INDEX "book_isbn_idx";

-- DropIndex
DROP INDEX "book_label_idx";

-- DropIndex
DROP INDEX "book_pages_idx";

-- DropIndex
DROP INDEX "book_publisher_idx";

-- DropIndex
DROP INDEX "book_shelf_idx";

-- DropIndex
DROP INDEX "book_summary_idx";

-- DropIndex
DROP INDEX "book_year_idx";

-- AlterTable
ALTER TABLE "book" DROP COLUMN "back_url",
DROP COLUMN "cover_url",
DROP COLUMN "edition",
DROP COLUMN "images_url",
DROP COLUMN "isbn",
DROP COLUMN "label",
DROP COLUMN "pages",
DROP COLUMN "pdf_url",
DROP COLUMN "publisher",
DROP COLUMN "shelf",
DROP COLUMN "year",
ADD COLUMN     "recommended_for" TEXT,
ADD COLUMN     "search_subtitle" TEXT,
ADD COLUMN     "search_title" TEXT;

-- DropTable
DROP TABLE "book_access";

-- DropTable
DROP TABLE "book_author";

-- DropTable
DROP TABLE "loan";

-- CreateTable
CREATE TABLE "volume_author" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "author_id" BIGINT NOT NULL,
    "volume_id" BIGINT NOT NULL,
    "description" TEXT,

    CONSTRAINT "volume_author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publisher" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "name" TEXT NOT NULL,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "description" TEXT,
    "avatar_url" TEXT,

    CONSTRAINT "publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volume_publisher" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "publisher_id" BIGINT NOT NULL,
    "volume_id" BIGINT NOT NULL,

    CONSTRAINT "volume_publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volume" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "book_id" BIGINT NOT NULL,
    "publisher_id" BIGINT,
    "year" INTEGER,
    "edition" TEXT,
    "isbn_old" TEXT,
    "isbn" TEXT,
    "pages" INTEGER,
    "description" TEXT,
    "pdf_url" TEXT,
    "cover_url" TEXT,
    "back_url" TEXT,
    "images_url" TEXT[],
    "keywords" TEXT[],
    "label" TEXT,
    "shelf" TEXT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "last_week_access_count" BIGINT NOT NULL DEFAULT 0,
    "last_week_access_count_updated_at" TIMESTAMPTZ(6),
    "last_month_access_count" BIGINT NOT NULL DEFAULT 0,
    "last_month_access_count_updated_at" TIMESTAMPTZ(6),
    "all_time_access_count" BIGINT NOT NULL DEFAULT 0,
    "all_time_access_count_updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "volume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volume_access" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT,
    "volume_id" BIGINT,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "browser_name" TEXT,
    "browser_version" TEXT,
    "os_name" TEXT,
    "os_version" TEXT,
    "device_name" TEXT,
    "device_vendor" TEXT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',

    CONSTRAINT "volume_access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "volume_author_id_key" ON "volume_author"("id");

-- CreateIndex
CREATE INDEX "volume_author_status_idx" ON "volume_author"("status");

-- CreateIndex
CREATE INDEX "volume_author_author_id_idx" ON "volume_author"("author_id");

-- CreateIndex
CREATE INDEX "volume_author_volume_id_idx" ON "volume_author"("volume_id");

-- CreateIndex
CREATE UNIQUE INDEX "publisher_id_key" ON "publisher"("id");

-- CreateIndex
CREATE UNIQUE INDEX "publisher_slug_key" ON "publisher"("slug");

-- CreateIndex
CREATE INDEX "publisher_status_idx" ON "publisher"("status");

-- CreateIndex
CREATE INDEX "publisher_name_idx" ON "publisher"("name");

-- CreateIndex
CREATE UNIQUE INDEX "volume_publisher_id_key" ON "volume_publisher"("id");

-- CreateIndex
CREATE INDEX "volume_publisher_status_idx" ON "volume_publisher"("status");

-- CreateIndex
CREATE INDEX "volume_publisher_publisher_id_idx" ON "volume_publisher"("publisher_id");

-- CreateIndex
CREATE INDEX "volume_publisher_volume_id_idx" ON "volume_publisher"("volume_id");

-- CreateIndex
CREATE UNIQUE INDEX "volume_id_key" ON "volume"("id");

-- CreateIndex
CREATE UNIQUE INDEX "volume_slug_key" ON "volume"("slug");

-- CreateIndex
CREATE INDEX "volume_status_idx" ON "volume"("status");

-- CreateIndex
CREATE INDEX "volume_year_idx" ON "volume"("year");

-- CreateIndex
CREATE INDEX "volume_edition_idx" ON "volume"("edition");

-- CreateIndex
CREATE INDEX "volume_isbn_old_idx" ON "volume"("isbn_old");

-- CreateIndex
CREATE INDEX "volume_isbn_idx" ON "volume"("isbn");

-- CreateIndex
CREATE INDEX "volume_pages_idx" ON "volume"("pages");

-- CreateIndex
CREATE INDEX "volume_label_idx" ON "volume"("label");

-- CreateIndex
CREATE INDEX "volume_shelf_idx" ON "volume"("shelf");

-- CreateIndex
CREATE INDEX "volume_keywords_idx" ON "volume"("keywords");

-- CreateIndex
CREATE INDEX "volume_last_month_access_count_idx" ON "volume"("last_month_access_count");

-- CreateIndex
CREATE INDEX "volume_all_time_access_count_idx" ON "volume"("all_time_access_count");

-- CreateIndex
CREATE INDEX "volume_last_week_access_count_idx" ON "volume"("last_week_access_count");

-- CreateIndex
CREATE UNIQUE INDEX "volume_access_id_key" ON "volume_access"("id");

-- CreateIndex
CREATE INDEX "volume_access_created_by_user_id_idx" ON "volume_access"("created_by_user_id");

-- CreateIndex
CREATE INDEX "volume_access_volume_id_idx" ON "volume_access"("volume_id");

-- CreateIndex
CREATE INDEX "volume_access_created_at_idx" ON "volume_access"("created_at");

-- CreateIndex
CREATE INDEX "volume_access_volume_id_created_at_idx" ON "volume_access"("volume_id", "created_at");

-- CreateIndex
CREATE INDEX "book_search_title_idx" ON "book"("search_title");

-- CreateIndex
CREATE INDEX "book_search_subtitle_idx" ON "book"("search_subtitle");

-- AddForeignKey
ALTER TABLE "volume_author" ADD CONSTRAINT "volume_author_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_author" ADD CONSTRAINT "volume_author_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_author" ADD CONSTRAINT "volume_author_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_author" ADD CONSTRAINT "volume_author_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publisher" ADD CONSTRAINT "publisher_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publisher" ADD CONSTRAINT "publisher_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_publisher" ADD CONSTRAINT "volume_publisher_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_publisher" ADD CONSTRAINT "volume_publisher_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_publisher" ADD CONSTRAINT "volume_publisher_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_publisher" ADD CONSTRAINT "volume_publisher_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume" ADD CONSTRAINT "volume_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume" ADD CONSTRAINT "volume_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_access" ADD CONSTRAINT "volume_access_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume_access" ADD CONSTRAINT "volume_access_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "volume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Params
ALTER SEQUENCE volume_author_id_seq RESTART WITH 1000001;
ALTER SEQUENCE publisher_id_seq RESTART WITH 1000001;
ALTER SEQUENCE volume_publisher_id_seq RESTART WITH 1000001;
ALTER SEQUENCE volume_id_seq RESTART WITH 1000001;
ALTER SEQUENCE volume_access_id_seq RESTART WITH 1000001;

-- Extensions
CREATE EXTENSION IF NOT EXISTS unaccent;

-- Default user
insert into "user" (id, slug, created_at, name, display_name,
sex, login, status, password, email,
role)
values (90001, 'system', NOW(), 'System', 'System',
'N', 'system', 'A', '12345678', 'system@email.com',
'ADMIN');