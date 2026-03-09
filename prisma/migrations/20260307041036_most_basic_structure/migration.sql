-- CreateEnum
CREATE TYPE "SexEnum" AS ENUM ('M', 'F', 'N');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'LIBRARIAN', 'MEMBER');

-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('A', 'I', 'E', 'D', 'V');

-- CreateTable
CREATE TABLE "user" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "sex" "SexEnum",
    "login" TEXT NOT NULL,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_auth_token" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "last_used_at" TIMESTAMPTZ(6),
    "created_ip" TEXT NOT NULL,
    "last_used_ip" TEXT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "jwt_token" TEXT NOT NULL,
    "jwt_secret" TEXT NOT NULL,
    "keep" BOOLEAN NOT NULL DEFAULT false,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "user_auth_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "author" (
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
    "is_spirit" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book_author" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "author_id" BIGINT NOT NULL,
    "book_id" BIGINT NOT NULL,

    CONSTRAINT "book_author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "name" TEXT NOT NULL,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "description" TEXT,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book_tag" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "tag_id" BIGINT NOT NULL,
    "book_id" BIGINT NOT NULL,

    CONSTRAINT "book_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "publisher" TEXT,
    "year" INTEGER,
    "edition" TEXT,
    "isbn" TEXT,
    "pages" INTEGER,
    "summary" TEXT,
    "pdf_url" TEXT,
    "cover_url" TEXT,
    "images_url" TEXT[],
    "label" TEXT,
    "shelf" TEXT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "description" TEXT,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loan" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by_user_id" BIGINT,
    "status" "StatusEnum" NOT NULL DEFAULT 'A',
    "loan_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "due_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "return_date" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "book_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "loan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_login_idx" ON "user"("login");

-- CreateIndex
CREATE INDEX "user_status_idx" ON "user"("status");

-- CreateIndex
CREATE INDEX "user_email_idx" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_token_id_key" ON "user_auth_token"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_token_slug_key" ON "user_auth_token"("slug");

-- CreateIndex
CREATE INDEX "user_auth_token_created_at_idx" ON "user_auth_token"("created_at");

-- CreateIndex
CREATE INDEX "user_auth_token_updated_at_idx" ON "user_auth_token"("updated_at");

-- CreateIndex
CREATE INDEX "user_auth_token_last_used_at_idx" ON "user_auth_token"("last_used_at");

-- CreateIndex
CREATE INDEX "user_auth_token_jwt_token_idx" ON "user_auth_token"("jwt_token");

-- CreateIndex
CREATE INDEX "user_auth_token_jwt_secret_idx" ON "user_auth_token"("jwt_secret");

-- CreateIndex
CREATE INDEX "user_auth_token_status_idx" ON "user_auth_token"("status");

-- CreateIndex
CREATE INDEX "user_auth_token_keep_idx" ON "user_auth_token"("keep");

-- CreateIndex
CREATE UNIQUE INDEX "author_id_key" ON "author"("id");

-- CreateIndex
CREATE UNIQUE INDEX "author_slug_key" ON "author"("slug");

-- CreateIndex
CREATE INDEX "author_status_idx" ON "author"("status");

-- CreateIndex
CREATE INDEX "author_is_spirit_idx" ON "author"("is_spirit");

-- CreateIndex
CREATE INDEX "author_name_idx" ON "author"("name");

-- CreateIndex
CREATE UNIQUE INDEX "book_author_id_key" ON "book_author"("id");

-- CreateIndex
CREATE UNIQUE INDEX "book_author_slug_key" ON "book_author"("slug");

-- CreateIndex
CREATE INDEX "book_author_status_idx" ON "book_author"("status");

-- CreateIndex
CREATE INDEX "book_author_author_id_idx" ON "book_author"("author_id");

-- CreateIndex
CREATE INDEX "book_author_book_id_idx" ON "book_author"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "tag_id_key" ON "tag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tag_slug_key" ON "tag"("slug");

-- CreateIndex
CREATE INDEX "tag_status_idx" ON "tag"("status");

-- CreateIndex
CREATE INDEX "tag_name_idx" ON "tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "book_tag_id_key" ON "book_tag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "book_tag_slug_key" ON "book_tag"("slug");

-- CreateIndex
CREATE INDEX "book_tag_status_idx" ON "book_tag"("status");

-- CreateIndex
CREATE INDEX "book_tag_tag_id_idx" ON "book_tag"("tag_id");

-- CreateIndex
CREATE INDEX "book_tag_book_id_idx" ON "book_tag"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "book_id_key" ON "book"("id");

-- CreateIndex
CREATE UNIQUE INDEX "book_slug_key" ON "book"("slug");

-- CreateIndex
CREATE INDEX "book_status_idx" ON "book"("status");

-- CreateIndex
CREATE INDEX "book_title_idx" ON "book"("title");

-- CreateIndex
CREATE INDEX "book_subtitle_idx" ON "book"("subtitle");

-- CreateIndex
CREATE INDEX "book_publisher_idx" ON "book"("publisher");

-- CreateIndex
CREATE INDEX "book_year_idx" ON "book"("year");

-- CreateIndex
CREATE INDEX "book_edition_idx" ON "book"("edition");

-- CreateIndex
CREATE INDEX "book_isbn_idx" ON "book"("isbn");

-- CreateIndex
CREATE INDEX "book_pages_idx" ON "book"("pages");

-- CreateIndex
CREATE INDEX "book_summary_idx" ON "book"("summary");

-- CreateIndex
CREATE INDEX "book_label_idx" ON "book"("label");

-- CreateIndex
CREATE INDEX "book_shelf_idx" ON "book"("shelf");

-- CreateIndex
CREATE UNIQUE INDEX "loan_id_key" ON "loan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "loan_slug_key" ON "loan"("slug");

-- CreateIndex
CREATE INDEX "loan_status_idx" ON "loan"("status");

-- AddForeignKey
ALTER TABLE "user_auth_token" ADD CONSTRAINT "user_auth_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author" ADD CONSTRAINT "author_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author" ADD CONSTRAINT "author_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_author" ADD CONSTRAINT "book_author_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_author" ADD CONSTRAINT "book_author_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_author" ADD CONSTRAINT "book_author_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_author" ADD CONSTRAINT "book_author_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_tag" ADD CONSTRAINT "book_tag_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_tag" ADD CONSTRAINT "book_tag_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_tag" ADD CONSTRAINT "book_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_tag" ADD CONSTRAINT "book_tag_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Params
ALTER SEQUENCE user_id_seq RESTART WITH 1000001;
ALTER SEQUENCE user_auth_token_id_seq RESTART WITH 1000001;
ALTER SEQUENCE author_id_seq RESTART WITH 1000001;
ALTER SEQUENCE book_author_id_seq RESTART WITH 1000001;
ALTER SEQUENCE tag_id_seq RESTART WITH 1000001;
ALTER SEQUENCE book_tag_id_seq RESTART WITH 1000001;
ALTER SEQUENCE book_id_seq RESTART WITH 1000001;
ALTER SEQUENCE loan_id_seq RESTART WITH 1000001;