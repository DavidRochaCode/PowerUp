/*
  Warnings:

  - A unique constraint covering the columns `[id_conta]` on the table `Almoco` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Cafe` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerDomingo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerQuarta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerQuinta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerSabado` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerSegunda` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerSexta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `ExerTerca` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Jantar` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Lanche_manha` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_conta]` on the table `Lanche_tarde` will be added. If there are existing duplicate values, this will fail.

*/
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
CREATE UNIQUE INDEX "Jantar_id_conta_key" ON "Jantar"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_manha_id_conta_key" ON "Lanche_manha"("id_conta");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_tarde_id_conta_key" ON "Lanche_tarde"("id_conta");
