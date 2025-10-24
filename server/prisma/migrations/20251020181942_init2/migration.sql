-- DropForeignKey
ALTER TABLE "public"."Comments" DROP CONSTRAINT "Comments_postId_fkey";

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
