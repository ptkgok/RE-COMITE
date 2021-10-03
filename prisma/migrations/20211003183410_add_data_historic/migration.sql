/*
  Warnings:

  - You are about to drop the column `dia` on the `Historicos` table. All the data in the column will be lost.
  - Added the required column `data` to the `Historicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Historicos" DROP COLUMN "dia",
ADD COLUMN     "data" TEXT NOT NULL;
