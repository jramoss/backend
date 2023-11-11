/*
  Warnings:

  - Made the column `dateNasc` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "dateNasc" SET NOT NULL,
ALTER COLUMN "dateNasc" DROP DEFAULT;
