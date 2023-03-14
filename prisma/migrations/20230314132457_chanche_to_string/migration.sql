-- DropIndex
DROP INDEX "Almoco_id_conta_key";

-- DropIndex
DROP INDEX "Cafe_id_conta_key";

-- DropIndex
DROP INDEX "ExerDomingo_id_conta_key";

-- DropIndex
DROP INDEX "ExerQuarta_id_conta_key";

-- DropIndex
DROP INDEX "ExerQuinta_id_conta_key";

-- DropIndex
DROP INDEX "ExerSabado_id_conta_key";

-- DropIndex
DROP INDEX "ExerSegunda_id_conta_key";

-- DropIndex
DROP INDEX "ExerSexta_id_conta_key";

-- DropIndex
DROP INDEX "ExerTerca_id_conta_key";

-- DropIndex
DROP INDEX "Jantar_id_conta_key";

-- DropIndex
DROP INDEX "Lanche_manha_id_conta_key";

-- DropIndex
DROP INDEX "Lanche_tarde_id_conta_key";

-- AlterTable
ALTER TABLE "ExerDomingo" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "serie" DROP NOT NULL,
ALTER COLUMN "serie" SET DATA TYPE TEXT,
ALTER COLUMN "repeticao" DROP NOT NULL,
ALTER COLUMN "repeticao" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ExerQuarta" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "serie" DROP NOT NULL,
ALTER COLUMN "serie" SET DATA TYPE TEXT,
ALTER COLUMN "repeticao" DROP NOT NULL,
ALTER COLUMN "repeticao" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ExerQuinta" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "serie" DROP NOT NULL,
ALTER COLUMN "serie" SET DATA TYPE TEXT,
ALTER COLUMN "repeticao" DROP NOT NULL,
ALTER COLUMN "repeticao" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ExerSabado" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "serie" DROP NOT NULL,
ALTER COLUMN "serie" SET DATA TYPE TEXT,
ALTER COLUMN "repeticao" DROP NOT NULL,
ALTER COLUMN "repeticao" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ExerSegunda" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "serie" DROP NOT NULL,
ALTER COLUMN "serie" SET DATA TYPE TEXT,
ALTER COLUMN "repeticao" DROP NOT NULL,
ALTER COLUMN "repeticao" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ExerSexta" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "serie" DROP NOT NULL,
ALTER COLUMN "serie" SET DATA TYPE TEXT,
ALTER COLUMN "repeticao" DROP NOT NULL,
ALTER COLUMN "repeticao" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ExerTerca" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "serie" DROP NOT NULL,
ALTER COLUMN "serie" SET DATA TYPE TEXT,
ALTER COLUMN "repeticao" DROP NOT NULL,
ALTER COLUMN "repeticao" SET DATA TYPE TEXT;
