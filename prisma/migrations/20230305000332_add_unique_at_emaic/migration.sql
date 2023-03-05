/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Conta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Conta_email_key" ON "Conta"("email");
