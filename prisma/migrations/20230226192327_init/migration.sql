-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,
    "genero" TEXT NOT NULL,
    "fator_atividade" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IMC" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "IMC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dieta" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "proposito" TEXT NOT NULL,

    CONSTRAINT "Dieta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jantar" (
    "id" SERIAL NOT NULL,
    "id_dieta" INTEGER NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "gordura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Jantar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cafe" (
    "id" SERIAL NOT NULL,
    "id_dieta" INTEGER NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "gordura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lanche_manha" (
    "id" SERIAL NOT NULL,
    "id_dieta" INTEGER NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "gordura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Lanche_manha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Almoco" (
    "id" SERIAL NOT NULL,
    "id_dieta" INTEGER NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "gordura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Almoco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lanche_tarde" (
    "id" SERIAL NOT NULL,
    "id_dieta" INTEGER NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "gordura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Lanche_tarde_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alimento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "id_janta" INTEGER NOT NULL,
    "id_cafe" INTEGER NOT NULL,
    "id_lanche_manha" INTEGER NOT NULL,
    "id_lanche_tarde" INTEGER NOT NULL,
    "id_almoco" INTEGER NOT NULL,

    CONSTRAINT "Alimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Treino" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "exercicio_nome" TEXT NOT NULL,

    CONSTRAINT "Treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_triceps" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_triceps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_deltoides" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_deltoides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_peitoral" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_peitoral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_gluteo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_gluteo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_coxa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_coxa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_panturrilha" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_panturrilha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_dorsal" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_dorsal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exer_biceps" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "repeticao" INTEGER NOT NULL,

    CONSTRAINT "Exer_biceps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Triceps_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_triceps" INTEGER NOT NULL,

    CONSTRAINT "Triceps_treino_pkey" PRIMARY KEY ("id_treino","id_exer_triceps")
);

-- CreateTable
CREATE TABLE "Deltoides_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_deltoides" INTEGER NOT NULL,

    CONSTRAINT "Deltoides_treino_pkey" PRIMARY KEY ("id_treino","id_exer_deltoides")
);

-- CreateTable
CREATE TABLE "Peitoral_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_peitoral" INTEGER NOT NULL,

    CONSTRAINT "Peitoral_treino_pkey" PRIMARY KEY ("id_treino","id_exer_peitoral")
);

-- CreateTable
CREATE TABLE "Gluteo_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_gluteo" INTEGER NOT NULL,

    CONSTRAINT "Gluteo_treino_pkey" PRIMARY KEY ("id_treino","id_exer_gluteo")
);

-- CreateTable
CREATE TABLE "Coxa_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_coxa" INTEGER NOT NULL,

    CONSTRAINT "Coxa_treino_pkey" PRIMARY KEY ("id_treino","id_exer_coxa")
);

-- CreateTable
CREATE TABLE "Panturrilha_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_panturrilha" INTEGER NOT NULL,

    CONSTRAINT "Panturrilha_treino_pkey" PRIMARY KEY ("id_treino","id_exer_panturrilha")
);

-- CreateTable
CREATE TABLE "Dorsal_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_dorsal" INTEGER NOT NULL,

    CONSTRAINT "Dorsal_treino_pkey" PRIMARY KEY ("id_treino","id_exer_dorsal")
);

-- CreateTable
CREATE TABLE "Biceps_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_exer_biceps" INTEGER NOT NULL,

    CONSTRAINT "Biceps_treino_pkey" PRIMARY KEY ("id_treino","id_exer_biceps")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "IMC_id_usuario_key" ON "IMC"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Dieta_id_usuario_key" ON "Dieta"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Jantar_id_dieta_key" ON "Jantar"("id_dieta");

-- CreateIndex
CREATE UNIQUE INDEX "Cafe_id_dieta_key" ON "Cafe"("id_dieta");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_manha_id_dieta_key" ON "Lanche_manha"("id_dieta");

-- CreateIndex
CREATE UNIQUE INDEX "Almoco_id_dieta_key" ON "Almoco"("id_dieta");

-- CreateIndex
CREATE UNIQUE INDEX "Lanche_tarde_id_dieta_key" ON "Lanche_tarde"("id_dieta");

-- AddForeignKey
ALTER TABLE "IMC" ADD CONSTRAINT "IMC_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dieta" ADD CONSTRAINT "Dieta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jantar" ADD CONSTRAINT "Jantar_id_dieta_fkey" FOREIGN KEY ("id_dieta") REFERENCES "Dieta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cafe" ADD CONSTRAINT "Cafe_id_dieta_fkey" FOREIGN KEY ("id_dieta") REFERENCES "Dieta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_manha" ADD CONSTRAINT "Lanche_manha_id_dieta_fkey" FOREIGN KEY ("id_dieta") REFERENCES "Dieta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Almoco" ADD CONSTRAINT "Almoco_id_dieta_fkey" FOREIGN KEY ("id_dieta") REFERENCES "Dieta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lanche_tarde" ADD CONSTRAINT "Lanche_tarde_id_dieta_fkey" FOREIGN KEY ("id_dieta") REFERENCES "Dieta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alimento" ADD CONSTRAINT "Alimento_id_janta_fkey" FOREIGN KEY ("id_janta") REFERENCES "Jantar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alimento" ADD CONSTRAINT "Alimento_id_cafe_fkey" FOREIGN KEY ("id_cafe") REFERENCES "Cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alimento" ADD CONSTRAINT "Alimento_id_lanche_manha_fkey" FOREIGN KEY ("id_lanche_manha") REFERENCES "Lanche_manha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alimento" ADD CONSTRAINT "Alimento_id_almoco_fkey" FOREIGN KEY ("id_almoco") REFERENCES "Almoco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alimento" ADD CONSTRAINT "Alimento_id_lanche_tarde_fkey" FOREIGN KEY ("id_lanche_tarde") REFERENCES "Lanche_tarde"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Triceps_treino" ADD CONSTRAINT "Triceps_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Triceps_treino" ADD CONSTRAINT "Triceps_treino_id_exer_triceps_fkey" FOREIGN KEY ("id_exer_triceps") REFERENCES "Exer_triceps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deltoides_treino" ADD CONSTRAINT "Deltoides_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deltoides_treino" ADD CONSTRAINT "Deltoides_treino_id_exer_deltoides_fkey" FOREIGN KEY ("id_exer_deltoides") REFERENCES "Exer_deltoides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peitoral_treino" ADD CONSTRAINT "Peitoral_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peitoral_treino" ADD CONSTRAINT "Peitoral_treino_id_exer_peitoral_fkey" FOREIGN KEY ("id_exer_peitoral") REFERENCES "Exer_peitoral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gluteo_treino" ADD CONSTRAINT "Gluteo_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gluteo_treino" ADD CONSTRAINT "Gluteo_treino_id_exer_gluteo_fkey" FOREIGN KEY ("id_exer_gluteo") REFERENCES "Exer_gluteo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coxa_treino" ADD CONSTRAINT "Coxa_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coxa_treino" ADD CONSTRAINT "Coxa_treino_id_exer_coxa_fkey" FOREIGN KEY ("id_exer_coxa") REFERENCES "Exer_coxa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panturrilha_treino" ADD CONSTRAINT "Panturrilha_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panturrilha_treino" ADD CONSTRAINT "Panturrilha_treino_id_exer_panturrilha_fkey" FOREIGN KEY ("id_exer_panturrilha") REFERENCES "Exer_panturrilha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dorsal_treino" ADD CONSTRAINT "Dorsal_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dorsal_treino" ADD CONSTRAINT "Dorsal_treino_id_exer_dorsal_fkey" FOREIGN KEY ("id_exer_dorsal") REFERENCES "Exer_dorsal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Biceps_treino" ADD CONSTRAINT "Biceps_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Biceps_treino" ADD CONSTRAINT "Biceps_treino_id_exer_biceps_fkey" FOREIGN KEY ("id_exer_biceps") REFERENCES "Exer_biceps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
