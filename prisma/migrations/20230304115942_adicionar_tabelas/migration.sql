/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `Almoco` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Cafe` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `IMC` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Jantar` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Lanche_manha` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Lanche_tarde` table. All the data in the column will be lost.
  - You are about to drop the column `altura` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `fator_atividade` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `peso` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `Usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idPerfil]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idConta]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idExerSegunda]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idExerTerca]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idExerQuarta]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idExerQuinta]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idExerSexta]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idExerSabado]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idExerDomingo]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idImc]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idJantar]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idCafe]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idLancheManha]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idAlmoco]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idLancheTarde]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idAlmoco` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCafe` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idConta` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idExerDomingo` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idExerQuarta` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idExerQuinta` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idExerSabado` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idExerSegunda` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idExerSexta` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idExerTerca` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idImc` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idJantar` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idLancheManha` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idLancheTarde` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idPerfil` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Almoco" DROP CONSTRAINT "Almoco_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Cafe" DROP CONSTRAINT "Cafe_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "IMC" DROP CONSTRAINT "IMC_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Jantar" DROP CONSTRAINT "Jantar_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Lanche_manha" DROP CONSTRAINT "Lanche_manha_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Lanche_tarde" DROP CONSTRAINT "Lanche_tarde_id_usuario_fkey";

-- DropIndex
DROP INDEX "Almoco_id_usuario_key";

-- DropIndex
DROP INDEX "Cafe_id_usuario_key";

-- DropIndex
DROP INDEX "IMC_id_usuario_key";

-- DropIndex
DROP INDEX "Jantar_id_usuario_key";

-- DropIndex
DROP INDEX "Lanche_manha_id_usuario_key";

-- DropIndex
DROP INDEX "Lanche_tarde_id_usuario_key";

-- DropIndex
DROP INDEX "Usuario_email_key";

-- AlterTable
ALTER TABLE "Almoco" DROP COLUMN "id_usuario";

-- AlterTable
ALTER TABLE "Cafe" DROP COLUMN "id_usuario";

-- AlterTable
ALTER TABLE "IMC" DROP COLUMN "id_usuario";

-- AlterTable
ALTER TABLE "Jantar" DROP COLUMN "id_usuario";

-- AlterTable
ALTER TABLE "Lanche_manha" DROP COLUMN "id_usuario";

-- AlterTable
ALTER TABLE "Lanche_tarde" DROP COLUMN "id_usuario";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "altura",
DROP COLUMN "email",
DROP COLUMN "fator_atividade",
DROP COLUMN "genero",
DROP COLUMN "nome",
DROP COLUMN "peso",
DROP COLUMN "senha",
ADD COLUMN     "idAlmoco" INTEGER NOT NULL,
ADD COLUMN     "idCafe" INTEGER NOT NULL,
ADD COLUMN     "idConta" TEXT NOT NULL,
ADD COLUMN     "idExerDomingo" INTEGER NOT NULL,
ADD COLUMN     "idExerQuarta" INTEGER NOT NULL,
ADD COLUMN     "idExerQuinta" INTEGER NOT NULL,
ADD COLUMN     "idExerSabado" INTEGER NOT NULL,
ADD COLUMN     "idExerSegunda" INTEGER NOT NULL,
ADD COLUMN     "idExerSexta" INTEGER NOT NULL,
ADD COLUMN     "idExerTerca" INTEGER NOT NULL,
ADD COLUMN     "idImc" INTEGER NOT NULL,
ADD COLUMN     "idJantar" INTEGER NOT NULL,
ADD COLUMN     "idLancheManha" INTEGER NOT NULL,
ADD COLUMN     "idLancheTarde" INTEGER NOT NULL,
ADD COLUMN     "idPerfil" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Conta" (
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Conta_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" SERIAL NOT NULL,
    "idade" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "geneto" TEXT NOT NULL,
    "fatorAtividade" TEXT NOT NULL,

    CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idPerfil_key" ON "Usuario"("idPerfil");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idConta_key" ON "Usuario"("idConta");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idExerSegunda_key" ON "Usuario"("idExerSegunda");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idExerTerca_key" ON "Usuario"("idExerTerca");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idExerQuarta_key" ON "Usuario"("idExerQuarta");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idExerQuinta_key" ON "Usuario"("idExerQuinta");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idExerSexta_key" ON "Usuario"("idExerSexta");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idExerSabado_key" ON "Usuario"("idExerSabado");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idExerDomingo_key" ON "Usuario"("idExerDomingo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idImc_key" ON "Usuario"("idImc");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idJantar_key" ON "Usuario"("idJantar");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idCafe_key" ON "Usuario"("idCafe");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idLancheManha_key" ON "Usuario"("idLancheManha");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idAlmoco_key" ON "Usuario"("idAlmoco");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idLancheTarde_key" ON "Usuario"("idLancheTarde");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idImc_fkey" FOREIGN KEY ("idImc") REFERENCES "IMC"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idJantar_fkey" FOREIGN KEY ("idJantar") REFERENCES "Jantar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idCafe_fkey" FOREIGN KEY ("idCafe") REFERENCES "Cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idLancheManha_fkey" FOREIGN KEY ("idLancheManha") REFERENCES "Lanche_manha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idAlmoco_fkey" FOREIGN KEY ("idAlmoco") REFERENCES "Almoco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idLancheTarde_fkey" FOREIGN KEY ("idLancheTarde") REFERENCES "Lanche_tarde"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idExerSegunda_fkey" FOREIGN KEY ("idExerSegunda") REFERENCES "ExerSegunda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idExerTerca_fkey" FOREIGN KEY ("idExerTerca") REFERENCES "ExerTerca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idExerQuarta_fkey" FOREIGN KEY ("idExerQuarta") REFERENCES "ExerQuarta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idExerQuinta_fkey" FOREIGN KEY ("idExerQuinta") REFERENCES "ExerQuinta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idExerSexta_fkey" FOREIGN KEY ("idExerSexta") REFERENCES "ExerSexta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idExerSabado_fkey" FOREIGN KEY ("idExerSabado") REFERENCES "ExerSabado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idExerDomingo_fkey" FOREIGN KEY ("idExerDomingo") REFERENCES "ExerDomingo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idConta_fkey" FOREIGN KEY ("idConta") REFERENCES "Conta"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idPerfil_fkey" FOREIGN KEY ("idPerfil") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
