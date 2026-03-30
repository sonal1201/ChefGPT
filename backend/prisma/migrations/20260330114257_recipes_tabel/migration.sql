/*
  Warnings:

  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Cuisine" AS ENUM ('italian', 'chinese', 'mexican', 'indian', 'american', 'thai', 'japanese', 'mediterranean', 'french', 'korean', 'vietnamese', 'spanish', 'greek', 'turkish', 'moroccan', 'brazilian', 'caribbean', 'middle_eastern', 'british', 'german', 'portuguese', 'other');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('breakfast', 'lunch', 'dinner', 'snack', 'dessert');

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "cuisine" "Cuisine" NOT NULL,
    "category" "Category" NOT NULL,
    "ingredients" JSONB NOT NULL,
    "imageUrl" TEXT,
    "prepTime" INTEGER NOT NULL,
    "cookTime" INTEGER NOT NULL,
    "serving" INTEGER NOT NULL,
    "nutrition" JSONB NOT NULL,
    "tips" JSONB NOT NULL,
    "substitutions" JSONB NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
