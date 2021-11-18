/*
  Warnings:

  - Added the required column `data_de_nascimento` to the `Certidao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_de_solicitacao` to the `Certidao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_de_registro` to the `Certidao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_da_certidao` to the `Certidao` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `data_de_solicitacao` on the `Rg` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `data_de_agendamento` on the `Rg` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `data_de_nascimento` on the `Rg` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Certidao" DROP COLUMN "data_de_nascimento",
ADD COLUMN     "data_de_nascimento" DATE NOT NULL,
DROP COLUMN "data_de_solicitacao",
ADD COLUMN     "data_de_solicitacao" DATE NOT NULL,
DROP COLUMN "data_de_registro",
ADD COLUMN     "data_de_registro" DATE NOT NULL,
DROP COLUMN "data_da_certidao",
ADD COLUMN     "data_da_certidao" DATE NOT NULL;

-- AlterTable
ALTER TABLE "Rg" DROP COLUMN "data_de_solicitacao",
ADD COLUMN     "data_de_solicitacao" DATE NOT NULL,
DROP COLUMN "data_de_agendamento",
ADD COLUMN     "data_de_agendamento" DATE NOT NULL,
DROP COLUMN "data_de_nascimento",
ADD COLUMN     "data_de_nascimento" DATE NOT NULL;
