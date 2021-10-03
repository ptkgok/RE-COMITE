/*
  Warnings:

  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bio` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[usuarioId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoDoUsuario" AS ENUM ('ADMIN', 'USUARIO');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropIndex
DROP INDEX "Profile_userId_key";

-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
DROP COLUMN "bio",
DROP COLUMN "userId",
ADD COLUMN     "usuarioId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Profile_id_seq";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT,
    "tipo_do_usuario" "TipoDoUsuario" NOT NULL DEFAULT E'USUARIO',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orgao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,

    CONSTRAINT "Orgao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,
    "posto" VARCHAR(20) NOT NULL,
    "dia" INTEGER NOT NULL,
    "dianome" VARCHAR(20) NOT NULL,
    "data" DATE NOT NULL,
    "hora" TIME(0) NOT NULL,
    "marcado" VARCHAR(3) NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historicos" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "acao" TEXT,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Historicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rg" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "nome_do_pai" TEXT NOT NULL,
    "nome_da_mae" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "orgao" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "data_de_solicitacao" TEXT NOT NULL,
    "cidadao_sabe_cpf" BOOLEAN NOT NULL,
    "cidadao_em_posse_da_certidao" BOOLEAN NOT NULL,
    "contato" TEXT NOT NULL,
    "contato2" TEXT,
    "contato3" TEXT,
    "whatsapp" TEXT,
    "estado_de_naturalidade" TEXT NOT NULL,
    "cidade_de_naturalidade" TEXT NOT NULL,
    "endereco_residencial" TEXT NOT NULL,
    "cidade_residencial" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "local_de_agendamento" TEXT NOT NULL,
    "data_de_agendamento" TEXT NOT NULL,
    "hora_do_agendamento" TEXT NOT NULL,
    "resolvido" BOOLEAN NOT NULL,
    "observacao" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "data_de_nascimento" TEXT NOT NULL,

    CONSTRAINT "Rg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certidao" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "nome_do_pai" TEXT NOT NULL,
    "nome_da_mae" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "orgao" TEXT NOT NULL,
    "email_do_solicitante" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "estado_de_naturalidade" TEXT NOT NULL,
    "data_de_nascimento" TIMESTAMP(3) NOT NULL,
    "data_de_solicitacao" TIMESTAMP(3) NOT NULL,
    "tipo_de_certidao" TEXT,
    "data_de_registro" TEXT,
    "data_da_certidao" TEXT,
    "resposta" TEXT,
    "estado_de_registro" TEXT,
    "comarca" TEXT,
    "distrito" TEXT,
    "livro" TEXT,
    "folha" TEXT,
    "termo" TEXT,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Certidao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OrgaoToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Historicos_usuarioId_key" ON "Historicos"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Rg_usuarioId_key" ON "Rg"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Certidao_usuarioId_key" ON "Certidao"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "_OrgaoToUsuario_AB_unique" ON "_OrgaoToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgaoToUsuario_B_index" ON "_OrgaoToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_usuarioId_key" ON "Profile"("usuarioId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historicos" ADD CONSTRAINT "Historicos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rg" ADD CONSTRAINT "Rg_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certidao" ADD CONSTRAINT "Certidao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgaoToUsuario" ADD FOREIGN KEY ("A") REFERENCES "Orgao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgaoToUsuario" ADD FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
