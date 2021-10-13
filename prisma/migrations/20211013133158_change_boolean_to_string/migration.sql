/*
  Warnings:

  - Added the required column `cidade_de_naturalidade` to the `Certidao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Certidao" ADD COLUMN     "cidade_de_naturalidade" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Rg" ALTER COLUMN "cidadao_sabe_cpf" SET DATA TYPE TEXT,
ALTER COLUMN "cidadao_em_posse_da_certidao" SET DATA TYPE TEXT,
ALTER COLUMN "resolvido" SET DATA TYPE TEXT;
