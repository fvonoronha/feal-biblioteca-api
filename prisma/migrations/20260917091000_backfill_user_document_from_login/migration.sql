-- Correção de dados (sem alteração de schema): usuários que se auto-cadastraram (POST
-- /account) sempre usam o próprio CPF como "login", mas até agora esse valor nunca era
-- copiado para a coluna "document" (só o fluxo de pré-cadastro pelo admin fazia isso) - o que
-- deixava a busca por CPF na tela de novo empréstimo silenciosamente sem resultado para
-- qualquer usuário que tivesse se cadastrado por conta própria.
-- A cláusula NOT EXISTS é só uma proteção extra contra colisão com a constraint única de
-- "document" - como "login" já é único no banco, na prática nunca deveria disparar.
UPDATE "user" u
SET document = u.login
WHERE u.document IS NULL
  AND u.login ~ '^[0-9]{11}$'
  AND NOT EXISTS (SELECT 1 FROM "user" u2 WHERE u2.document = u.login);
