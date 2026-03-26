-- AlterTable
ALTER TABLE "book" ADD COLUMN     "back_url" TEXT;

-- AlterTable
ALTER TABLE "loan" ALTER COLUMN "due_date" DROP DEFAULT,
ALTER COLUMN "due_date" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "return_date" DROP DEFAULT,
ALTER COLUMN "return_date" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "book_access" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT,
    "book_id" BIGINT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',

    CONSTRAINT "book_access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_access_id_key" ON "book_access"("id");

-- CreateIndex
CREATE INDEX "book_access_created_by_user_id_idx" ON "book_access"("created_by_user_id");

-- CreateIndex
CREATE INDEX "book_access_book_id_idx" ON "book_access"("book_id");

-- AddForeignKey
ALTER TABLE "book_access" ADD CONSTRAINT "book_access_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_access" ADD CONSTRAINT "book_access_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Params
ALTER SEQUENCE book_access_id_seq RESTART WITH 1000001;