/*
  Warnings:

  - A unique constraint covering the columns `[id_usuario]` on the table `ExerDomingo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `ExerQuarta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `ExerQuinta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `ExerSabado` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `ExerSegunda` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `ExerSexta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `ExerTerca` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_usuario` to the `ExerDomingo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `ExerQuarta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `ExerQuinta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `ExerSabado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `ExerSegunda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `ExerSexta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `ExerTerca` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExerDomingo" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerQuarta" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerQuinta" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerSabado" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerSegunda" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerSexta" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerTerca" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExerDomingo_id_usuario_key" ON "ExerDomingo"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ExerQuarta_id_usuario_key" ON "ExerQuarta"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ExerQuinta_id_usuario_key" ON "ExerQuinta"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ExerSabado_id_usuario_key" ON "ExerSabado"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ExerSegunda_id_usuario_key" ON "ExerSegunda"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ExerSexta_id_usuario_key" ON "ExerSexta"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "ExerTerca_id_usuario_key" ON "ExerTerca"("id_usuario");

-- AddForeignKey
ALTER TABLE "ExerSegunda" ADD CONSTRAINT "ExerSegunda_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerTerca" ADD CONSTRAINT "ExerTerca_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerQuarta" ADD CONSTRAINT "ExerQuarta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerQuinta" ADD CONSTRAINT "ExerQuinta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerSexta" ADD CONSTRAINT "ExerSexta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerSabado" ADD CONSTRAINT "ExerSabado_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerDomingo" ADD CONSTRAINT "ExerDomingo_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
