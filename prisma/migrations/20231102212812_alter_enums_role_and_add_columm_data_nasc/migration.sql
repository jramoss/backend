/*
  Warnings:

  - Added the required column `dateNasc` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'MANAGER';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dateNasc" TIMESTAMP(3) NOT NULL;
