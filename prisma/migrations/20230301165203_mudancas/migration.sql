/*
  Warnings:

  - You are about to drop the column `id_dieta` on the `Almoco` table. All the data in the column will be lost.
  - You are about to drop the column `id_dieta` on the `Cafe` table. All the data in the column will be lost.
  - You are about to drop the column `id_dieta` on the `Jantar` table. All the data in the column will be lost.
  - You are about to drop the column `id_dieta` on the `Lanche_manha` table. All the data in the column will be lost.
  - You are about to drop the column `id_dieta` on the `Lanche_tarde` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_usuario]` on the table `Almoco` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Cafe` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Jantar` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Lanche_manha` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Lanche_tarde` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_usuario` to the `Almoco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_alimento` to the `Almoco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Almoco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `Cafe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_alimento` to the `Cafe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Cafe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `Jantar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_alimento` to the `Jantar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Jantar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `Lanche_manha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_alimento` to the `Lanche_manha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Lanche_manha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `Lanche_tarde` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_alimento` to the `Lanche_tarde` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Lanche_tarde` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Almoco_id_dieta_key";

-- DropIndex
DROP INDEX "Cafe_id_dieta_key";

-- DropIndex
DROP INDEX "Jantar_id_dieta_key";

-- DropIndex
DROP INDEX "Lanche_manha_id_dieta_key";

-- DropIndex
DROP INDEX "Lanche_tarde_id_dieta_key";

-- AlterTable
ALTER TABLE "Almoco" DROP COLUMN "id_dieta",
ADD COLUMN     "id_usuario" INTEGER NOT NULL,
ADD COLUMN     "nome_alimento" TEXT NOT NULL,
ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Cafe" DROP COLUMN "id_dieta",
ADD COLUMN     "id_usuario" INTEGER NOT NULL,
ADD COLUMN     "nome_alimento" TEXT NOT NULL,
ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Jantar" DROP COLUMN "id_dieta",
ADD COLUMN     "id_usuario" INTEGER NOT NULL,
ADD COLUMN     "nome_alimento" TEXT NOT NULL,
ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Lanche_manha" DROP COLUMN "id_dieta",
ADD COLUMN     "id_usuario" INTEGER NOT NULL,
ADD COLUMN     "nome_alimento" TEXT NOT NULL,
ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Lanche_tarde" DROP COLUMN "id_dieta",
ADD COLUMN     "id_usuario" INTEGER NOT NULL,
ADD COLUMN     "nome_alimento" TEXT NOT NULL,
ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Almoco_id_usuario_key" ON "Almoco"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Cafe_id_usuario_key" ON "Cafe"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Jantar_id_usuario_key" ON "Jantar"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_manha_id_usuario_key" ON "Lanche_manha"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_tarde_id_usuario_key" ON "Lanche_tarde"("id_usuario");

-- AddForeignKey
ALTER TABLE "Jantar" ADD CONSTRAINT "Jantar_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cafe" ADD CONSTRAINT "Cafe_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_manha" ADD CONSTRAINT "Lanche_manha_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Almoco" ADD CONSTRAINT "Almoco_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_tarde" ADD CONSTRAINT "Lanche_tarde_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
