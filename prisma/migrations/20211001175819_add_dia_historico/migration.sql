/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Historicos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Historicos` table. All the data in the column will be lost.
  - Added the required column `dia` to the `Historicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Historicos" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "dia" TEXT NOT NULL;
