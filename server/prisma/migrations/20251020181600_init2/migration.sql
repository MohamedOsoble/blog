/*
  Warnings:

  - You are about to drop the column `dislikes` on the `Comments` table. All the data in the column will be lost.
  - Added the required column `description` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "dislikes";

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT NOT NULL DEFAULT 'Misc';
