/*
  Warnings:

  - The primary key for the `Conta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `geneto` on the `Perfil` table. All the data in the column will be lost.
  - Added the required column `genero` to the `Perfil` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `idConta` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idConta_fkey";

-- AlterTable
ALTER TABLE "Conta" DROP CONSTRAINT "Conta_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Conta_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Perfil" DROP COLUMN "geneto",
ADD COLUMN     "genero" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "idConta",
ADD COLUMN     "idConta" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idConta_key" ON "Usuario"("idConta");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idConta_fkey" FOREIGN KEY ("idConta") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
