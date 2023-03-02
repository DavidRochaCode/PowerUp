/*
  Warnings:

  - You are about to drop the `Alimento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Biceps_treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Coxa_treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deltoides_treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dieta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dorsal_treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_biceps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_coxa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_deltoides` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_dorsal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_gluteo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_panturrilha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_peitoral` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exer_triceps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gluteo_treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Panturrilha_treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Peitoral_treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Treino` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Triceps_treino` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Alimento" DROP CONSTRAINT "Alimento_id_almoco_fkey";

-- DropForeignKey
ALTER TABLE "Alimento" DROP CONSTRAINT "Alimento_id_cafe_fkey";

-- DropForeignKey
ALTER TABLE "Alimento" DROP CONSTRAINT "Alimento_id_janta_fkey";

-- DropForeignKey
ALTER TABLE "Alimento" DROP CONSTRAINT "Alimento_id_lanche_manha_fkey";

-- DropForeignKey
ALTER TABLE "Alimento" DROP CONSTRAINT "Alimento_id_lanche_tarde_fkey";

-- DropForeignKey
ALTER TABLE "Almoco" DROP CONSTRAINT "Almoco_id_dieta_fkey";

-- DropForeignKey
ALTER TABLE "Biceps_treino" DROP CONSTRAINT "Biceps_treino_id_exer_biceps_fkey";

-- DropForeignKey
ALTER TABLE "Biceps_treino" DROP CONSTRAINT "Biceps_treino_id_treino_fkey";

-- DropForeignKey
ALTER TABLE "Cafe" DROP CONSTRAINT "Cafe_id_dieta_fkey";

-- DropForeignKey
ALTER TABLE "Coxa_treino" DROP CONSTRAINT "Coxa_treino_id_exer_coxa_fkey";

-- DropForeignKey
ALTER TABLE "Coxa_treino" DROP CONSTRAINT "Coxa_treino_id_treino_fkey";

-- DropForeignKey
ALTER TABLE "Deltoides_treino" DROP CONSTRAINT "Deltoides_treino_id_exer_deltoides_fkey";

-- DropForeignKey
ALTER TABLE "Deltoides_treino" DROP CONSTRAINT "Deltoides_treino_id_treino_fkey";

-- DropForeignKey
ALTER TABLE "Dieta" DROP CONSTRAINT "Dieta_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Dorsal_treino" DROP CONSTRAINT "Dorsal_treino_id_exer_dorsal_fkey";

-- DropForeignKey
ALTER TABLE "Dorsal_treino" DROP CONSTRAINT "Dorsal_treino_id_treino_fkey";

-- DropForeignKey
ALTER TABLE "Gluteo_treino" DROP CONSTRAINT "Gluteo_treino_id_exer_gluteo_fkey";

-- DropForeignKey
ALTER TABLE "Gluteo_treino" DROP CONSTRAINT "Gluteo_treino_id_treino_fkey";

-- DropForeignKey
ALTER TABLE "Jantar" DROP CONSTRAINT "Jantar_id_dieta_fkey";

-- DropForeignKey
ALTER TABLE "Lanche_manha" DROP CONSTRAINT "Lanche_manha_id_dieta_fkey";

-- DropForeignKey
ALTER TABLE "Lanche_tarde" DROP CONSTRAINT "Lanche_tarde_id_dieta_fkey";

-- DropForeignKey
ALTER TABLE "Panturrilha_treino" DROP CONSTRAINT "Panturrilha_treino_id_exer_panturrilha_fkey";

-- DropForeignKey
ALTER TABLE "Panturrilha_treino" DROP CONSTRAINT "Panturrilha_treino_id_treino_fkey";

-- DropForeignKey
ALTER TABLE "Peitoral_treino" DROP CONSTRAINT "Peitoral_treino_id_exer_peitoral_fkey";

-- DropForeignKey
ALTER TABLE "Peitoral_treino" DROP CONSTRAINT "Peitoral_treino_id_treino_fkey";

-- DropForeignKey
ALTER TABLE "Triceps_treino" DROP CONSTRAINT "Triceps_treino_id_exer_triceps_fkey";

-- DropForeignKey
ALTER TABLE "Triceps_treino" DROP CONSTRAINT "Triceps_treino_id_treino_fkey";

-- DropTable
DROP TABLE "Alimento";

-- DropTable
DROP TABLE "Biceps_treino";

-- DropTable
DROP TABLE "Coxa_treino";

-- DropTable
DROP TABLE "Deltoides_treino";

-- DropTable
DROP TABLE "Dieta";

-- DropTable
DROP TABLE "Dorsal_treino";

-- DropTable
DROP TABLE "Exer_biceps";

-- DropTable
DROP TABLE "Exer_coxa";

-- DropTable
DROP TABLE "Exer_deltoides";

-- DropTable
DROP TABLE "Exer_dorsal";

-- DropTable
DROP TABLE "Exer_gluteo";

-- DropTable
DROP TABLE "Exer_panturrilha";

-- DropTable
DROP TABLE "Exer_peitoral";

-- DropTable
DROP TABLE "Exer_triceps";

-- DropTable
DROP TABLE "Gluteo_treino";

-- DropTable
DROP TABLE "Panturrilha_treino";

-- DropTable
DROP TABLE "Peitoral_treino";

-- DropTable
DROP TABLE "Treino";

-- DropTable
DROP TABLE "Triceps_treino";

-- CreateTable
CREATE TABLE "ExerSegunda" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "ExerSegunda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerTerca" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "ExerTerca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerQuarta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "ExerQuarta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerQuinta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "ExerQuinta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerSexta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "ExerSexta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerSabado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "ExerSabado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerDomingo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "ExerDomingo_pkey" PRIMARY KEY ("id")
);
