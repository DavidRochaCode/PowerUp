/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `altura` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fator_atividade` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peso` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "altura" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fator_atividade" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "peso" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
