/*
  Warnings:

  - You are about to drop the column `altura` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `fator_atividade` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `peso` on the `Usuario` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Usuario_email_key";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "altura",
DROP COLUMN "email",
DROP COLUMN "fator_atividade",
DROP COLUMN "genero",
DROP COLUMN "peso";
