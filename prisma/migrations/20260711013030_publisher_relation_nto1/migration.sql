/*
  Warnings:

  - You are about to drop the `volume_publisher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "volume_publisher" DROP CONSTRAINT "volume_publisher_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "volume_publisher" DROP CONSTRAINT "volume_publisher_publisher_id_fkey";

-- DropForeignKey
ALTER TABLE "volume_publisher" DROP CONSTRAINT "volume_publisher_updated_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "volume_publisher" DROP CONSTRAINT "volume_publisher_volume_id_fkey";

-- DropTable
DROP TABLE "volume_publisher";

-- AddForeignKey
ALTER TABLE "volume" ADD CONSTRAINT "volume_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
