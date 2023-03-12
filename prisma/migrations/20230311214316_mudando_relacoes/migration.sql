/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_conta]` on the table `Almoco` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Cafe` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerDomingo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerQuarta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerQuinta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerSabado` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerSegunda` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerSexta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerTerca` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `IMC` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Jantar` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Lanche_manha` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Lanche_tarde` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Perfil` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_conta` to the `Almoco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `Cafe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `ExerDomingo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `ExerQuarta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `ExerQuinta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `ExerSabado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `ExerSegunda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `ExerSexta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `ExerTerca` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `IMC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `Jantar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `Lanche_manha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `Lanche_tarde` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_conta` to the `Perfil` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idAlmoco_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idCafe_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idConta_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idExerDomingo_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idExerQuarta_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idExerQuinta_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idExerSabado_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idExerSegunda_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idExerSexta_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idExerTerca_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idImc_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idJantar_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idLancheManha_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idLancheTarde_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idPerfil_fkey";

-- AlterTable
ALTER TABLE "Almoco" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Cafe" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerDomingo" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerQuarta" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerQuinta" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerSabado" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerSegunda" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerSexta" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerTerca" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "IMC" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Jantar" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Lanche_manha" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Lanche_tarde" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Perfil" ADD COLUMN     "id_conta" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Usuario";

-- CreateIndex
CREATE UNIQUE INDEX "Almoco_id_conta_key" ON "Almoco"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Cafe_id_conta_key" ON "Cafe"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "ExerDomingo_id_conta_key" ON "ExerDomingo"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "ExerQuarta_id_conta_key" ON "ExerQuarta"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "ExerQuinta_id_conta_key" ON "ExerQuinta"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "ExerSabado_id_conta_key" ON "ExerSabado"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "ExerSegunda_id_conta_key" ON "ExerSegunda"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "ExerSexta_id_conta_key" ON "ExerSexta"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "ExerTerca_id_conta_key" ON "ExerTerca"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "IMC_id_conta_key" ON "IMC"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Jantar_id_conta_key" ON "Jantar"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_manha_id_conta_key" ON "Lanche_manha"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_tarde_id_conta_key" ON "Lanche_tarde"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Perfil_id_conta_key" ON "Perfil"("id_conta");

-- AddForeignKey
ALTER TABLE "Perfil" ADD CONSTRAINT "Perfil_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IMC" ADD CONSTRAINT "IMC_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jantar" ADD CONSTRAINT "Jantar_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cafe" ADD CONSTRAINT "Cafe_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_manha" ADD CONSTRAINT "Lanche_manha_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Almoco" ADD CONSTRAINT "Almoco_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_tarde" ADD CONSTRAINT "Lanche_tarde_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerSegunda" ADD CONSTRAINT "ExerSegunda_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerTerca" ADD CONSTRAINT "ExerTerca_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerQuarta" ADD CONSTRAINT "ExerQuarta_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerQuinta" ADD CONSTRAINT "ExerQuinta_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerSexta" ADD CONSTRAINT "ExerSexta_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerSabado" ADD CONSTRAINT "ExerSabado_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerDomingo" ADD CONSTRAINT "ExerDomingo_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
