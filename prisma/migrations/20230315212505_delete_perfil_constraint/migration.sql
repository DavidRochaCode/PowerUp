/*
  Warnings:

  - You are about to drop the column `id_conta` on the `Perfil` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Perfil" DROP CONSTRAINT "Perfil_id_conta_fkey";

-- DropIndex
DROP INDEX "Perfil_id_conta_key";

-- AlterTable
ALTER TABLE "Perfil" DROP COLUMN "id_conta";
