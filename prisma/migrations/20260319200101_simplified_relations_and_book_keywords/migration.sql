/*
  Warnings:

  - You are about to drop the column `slug` on the `book_author` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `book_tag` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "book_author_slug_key";

-- DropIndex
DROP INDEX "book_tag_slug_key";

-- AlterTable
ALTER TABLE "book" ADD COLUMN     "keywords" TEXT[];

-- AlterTable
ALTER TABLE "book_author" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "book_tag" DROP COLUMN "slug";
