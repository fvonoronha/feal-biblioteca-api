-- CreateIndex
-- Consultas de "empréstimos atrasados" filtram/ordenam por due_date.
CREATE INDEX "volume_loan_due_date_idx" ON "volume_loan"("due_date");

-- CreateIndex
-- Impede, a nível de banco, que duas requisições concorrentes criem o mesmo vínculo
-- autor<->volume ativo duas vezes (a aplicação já fazia um "check then insert", que sozinho
-- é uma condição de corrida sob acesso concorrente).
-- Índice PARCIAL (só considera linhas com status = 'A'): não pode ser expresso no schema.prisma
-- (o Prisma não suporta "@@unique" condicional), por isso vive só aqui na migration.
CREATE UNIQUE INDEX "volume_author_author_id_volume_id_active_key"
    ON "volume_author"("author_id", "volume_id")
    WHERE "status" = 'A';

-- CreateIndex
-- Mesma proteção para o vínculo tag<->livro ativo.
CREATE UNIQUE INDEX "book_tag_tag_id_book_id_active_key"
    ON "book_tag"("tag_id", "book_id")
    WHERE "status" = 'A';

-- CreateIndex
-- No máximo um empréstimo ativo (não devolvido) por volume ao mesmo tempo - a aplicação
-- também valida isso, mas sem essa constraint duas requisições concorrentes de empréstimo
-- do mesmo exemplar poderiam ambas "ganhar a corrida" e criar dois empréstimos ativos.
CREATE UNIQUE INDEX "volume_loan_volume_id_active_key"
    ON "volume_loan"("volume_id")
    WHERE "return_date" IS NULL AND "status" = 'A';
