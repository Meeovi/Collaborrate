/*
  Warnings:

  - The primary key for the `agreements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product_attribute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product_types` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `quotes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `rating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `reports` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `reviews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `rewards` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `shops` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `special_discounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `states` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `statistics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `stocks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tax_rate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tax_rule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `themes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `url_rewrites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Scheduler` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Audience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GlobalConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GraphQLConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Hooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Idempotency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Join:roles:_Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Join:users:_Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PushStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `core_store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `polls` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_attribute_set` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `source` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `upload_file` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `upload_file_morph` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `currency_rates` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `currency_symbols` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "brands" DROP CONSTRAINT "brands_product_fkey";

-- DropForeignKey
ALTER TABLE "emails" DROP CONSTRAINT "emails_staff_id_fkey";

-- DropForeignKey
ALTER TABLE "manufacturer" DROP CONSTRAINT "manufacturer_product_fkey";

-- DropForeignKey
ALTER TABLE "mediamanager" DROP CONSTRAINT "mediamanager_agreements_fkey";

-- DropForeignKey
ALTER TABLE "mediamanager" DROP CONSTRAINT "mediamanager_author_fkey";

-- DropForeignKey
ALTER TABLE "mediamanager" DROP CONSTRAINT "mediamanager_brands_fkey";

-- DropForeignKey
ALTER TABLE "mediamanager" DROP CONSTRAINT "mediamanager_comment_fkey";

-- DropForeignKey
ALTER TABLE "mediamanager" DROP CONSTRAINT "mediamanager_members_fkey";

-- DropForeignKey
ALTER TABLE "mediamanager" DROP CONSTRAINT "mediamanager_products_fkey";

-- DropForeignKey
ALTER TABLE "mediamanager" DROP CONSTRAINT "mediamanager_task_name_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_staff_id_fkey";

-- DropForeignKey
ALTER TABLE "occassions" DROP CONSTRAINT "occassions_products_fkey";

-- DropForeignKey
ALTER TABLE "occassions" DROP CONSTRAINT "occassions_wishlists_fkey";

-- DropForeignKey
ALTER TABLE "product_attribute_set" DROP CONSTRAINT "product_attribute_set_attribute_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_related_product_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_cust_id_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_staff_id_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_task_id_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_ticket_id_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_checklists_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_comment_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_country_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_products_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_state_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_brands_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_category_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_customers_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_products_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_projects_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_shops_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_tasks_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_users_fkey";

-- AlterTable
ALTER TABLE "agreements" DROP CONSTRAINT "agreements_pkey",
ADD COLUMN     "mediamanager" TEXT,
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ALTER COLUMN "reference_id" DROP DEFAULT,
ALTER COLUMN "reference_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "shop_id" DROP DEFAULT,
ALTER COLUMN "shop_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "agreements_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "agreements_reference_id_seq";
DROP SEQUENCE "agreements_user_id_seq";
DROP SEQUENCE "agreements_shop_id_seq";

-- AlterTable
ALTER TABLE "currency_rates" ADD COLUMN     "id" BIGSERIAL NOT NULL;

-- AlterTable
ALTER TABLE "currency_symbols" ADD COLUMN     "id" BIGSERIAL NOT NULL;

-- AlterTable
ALTER TABLE "emails" ADD COLUMN     "users" TEXT;

-- AlterTable
ALTER TABLE "mediamanager" ADD COLUMN     "agreements_agreementsTomediamanager" TEXT,
ADD COLUMN     "users" TEXT;

-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "users" TEXT;

-- AlterTable
ALTER TABLE "pages" DROP CONSTRAINT "pages_pkey",
ADD COLUMN     "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "content_title" SET DATA TYPE TEXT,
ADD CONSTRAINT "pages_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "product_attribute" DROP CONSTRAINT "product_attribute_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "product_attribute_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "product_types" DROP CONSTRAINT "product_types_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "product_types_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "users" TEXT;

-- AlterTable
ALTER TABLE "quotes" DROP CONSTRAINT "quotes_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "quotes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "rating" DROP CONSTRAINT "rating_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "rating_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "reports" DROP CONSTRAINT "reports_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "reports_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "reviews_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "rewards" DROP CONSTRAINT "rewards_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "rewards_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "shops" DROP CONSTRAINT "shops_pkey",
ADD COLUMN     "workspaces" TEXT,
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "shops_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "special_discounts" DROP CONSTRAINT "special_discounts_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "excerpt" SET DATA TYPE TEXT,
ALTER COLUMN "discount" SET DATA TYPE TEXT,
ALTER COLUMN "published" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "special_discounts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "states" DROP CONSTRAINT "states_pkey",
ADD COLUMN     "trainings" TEXT,
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "states_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "statistics" DROP CONSTRAINT "statistics_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "statistics_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "stocks_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tax_rate" DROP CONSTRAINT "tax_rate_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "tax_rate_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tax_rule" DROP CONSTRAINT "tax_rule_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "tax_rule_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "themes" DROP CONSTRAINT "themes_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "themes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "trainings" ADD COLUMN     "states" TEXT;

-- AlterTable
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "transactions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "url_rewrites" DROP CONSTRAINT "url_rewrites_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "url_rewrites_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ADD COLUMN     "emails" TEXT,
ADD COLUMN     "mediamanager" TEXT,
ADD COLUMN     "messages" TEXT,
ADD COLUMN     "projects" TEXT,
ADD COLUMN     "workspaces" TEXT,
ALTER COLUMN "id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "websites" ADD COLUMN     "category" TEXT,
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "workspaces" ADD COLUMN     "shops_shopsToworkspaces" TEXT,
ADD COLUMN     "users_usersToworkspaces" TEXT;

-- DropTable
DROP TABLE "Scheduler";

-- DropTable
DROP TABLE "_Audience";

-- DropTable
DROP TABLE "_GlobalConfig";

-- DropTable
DROP TABLE "_GraphQLConfig";

-- DropTable
DROP TABLE "_Hooks";

-- DropTable
DROP TABLE "_Idempotency";

-- DropTable
DROP TABLE "_JobSchedule";

-- DropTable
DROP TABLE "_JobStatus";

-- DropTable
DROP TABLE "_Join:roles:_Role";

-- DropTable
DROP TABLE "_Join:users:_Role";

-- DropTable
DROP TABLE "_PushStatus";

-- DropTable
DROP TABLE "_Role";

-- DropTable
DROP TABLE "_User";

-- DropTable
DROP TABLE "core_store";

-- DropTable
DROP TABLE "polls";

-- DropTable
DROP TABLE "product_attribute_set";

-- DropTable
DROP TABLE "roles";

-- DropTable
DROP TABLE "source";

-- DropTable
DROP TABLE "tasks";

-- DropTable
DROP TABLE "upload_file";

-- DropTable
DROP TABLE "upload_file_morph";

-- CreateTable
CREATE TABLE "userRoles" (
    "id" BIGSERIAL NOT NULL,
    "role_name" TEXT NOT NULL,
    "content" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduler" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "endDate" TEXT,
    "level" TEXT,
    "login" TEXT,
    "notes" TEXT,
    "startDate" TEXT,
    "whid" TEXT,

    CONSTRAINT "Scheduler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todoLists" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "subject" TEXT,
    "start_date" TEXT,
    "due_date" TEXT,
    "priority" TEXT,
    "description" TEXT,
    "status" TEXT,
    "related_to" TEXT,
    "contact" TEXT,
    "assigned_to" TEXT,
    "date_modified" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "task" TEXT,
    "checklists" TEXT,
    "visits" TEXT,
    "projects" TEXT,
    "tickets" TEXT,
    "cases" TEXT,
    "surveys" TEXT,
    "articles" TEXT,
    "endofshift" TEXT,
    "name" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "currency_rates_id_key" ON "currency_rates"("id");

-- CreateIndex
CREATE UNIQUE INDEX "currency_symbols_id_key" ON "currency_symbols"("id");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_related_product_fkey" FOREIGN KEY ("related_product") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "ticketing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "todoLists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_product_fkey" FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "manufacturer" ADD CONSTRAINT "manufacturer_product_fkey" FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD CONSTRAINT "mediamanager_comment_fkey" FOREIGN KEY ("comment") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD CONSTRAINT "mediamanager_author_fkey" FOREIGN KEY ("author") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD CONSTRAINT "mediamanager_products_fkey" FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD CONSTRAINT "mediamanager_brands_fkey" FOREIGN KEY ("brands") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD CONSTRAINT "mediamanager_task_name_fkey" FOREIGN KEY ("task_name") REFERENCES "todoLists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "occassions" ADD CONSTRAINT "occassions_products_fkey" FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "occassions" ADD CONSTRAINT "occassions_wishlists_fkey" FOREIGN KEY ("wishlists") REFERENCES "wishlists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workspaces" ADD CONSTRAINT "workspaces_category_fkey" FOREIGN KEY ("category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workspaces" ADD CONSTRAINT "workspaces_customers_fkey" FOREIGN KEY ("customers") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workspaces" ADD CONSTRAINT "workspaces_products_fkey" FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workspaces" ADD CONSTRAINT "workspaces_projects_fkey" FOREIGN KEY ("projects") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workspaces" ADD CONSTRAINT "workspaces_brands_fkey" FOREIGN KEY ("brands") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "workspaces" ADD CONSTRAINT "workspaces_tasks_fkey" FOREIGN KEY ("tasks") REFERENCES "todoLists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_comment_fkey" FOREIGN KEY ("comment") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_country_fkey" FOREIGN KEY ("country") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_products_fkey" FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_checklists_fkey" FOREIGN KEY ("checklists") REFERENCES "checklist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- RenameIndex
ALTER INDEX "apitoken.name_unique" RENAME TO "apitoken_name_key";

-- RenameIndex
ALTER INDEX "apitoken.token_unique" RENAME TO "apitoken_token_key";

-- RenameIndex
ALTER INDEX "customer_payment.account_no_unique" RENAME TO "customer_payment_account_no_key";

-- RenameIndex
ALTER INDEX "customer_payment.cust_id_unique" RENAME TO "customer_payment_cust_id_key";

-- RenameIndex
ALTER INDEX "newsletter_subscribers.email_unique" RENAME TO "newsletter_subscribers_email_key";

-- RenameIndex
ALTER INDEX "payments.id_unique" RENAME TO "payments_id_key";

-- RenameIndex
ALTER INDEX "payments.name_unique" RENAME TO "payments_name_key";

-- RenameIndex
ALTER INDEX "permissions.id_unique" RENAME TO "permissions_id_key";

-- RenameIndex
ALTER INDEX "products.sku_unique" RENAME TO "products_sku_key";

-- RenameIndex
ALTER INDEX "providers.id_unique" RENAME TO "providers_id_key";

-- RenameIndex
ALTER INDEX "providers.name_unique" RENAME TO "providers_name_key";

-- RenameIndex
ALTER INDEX "segments.id_unique" RENAME TO "segments_id_key";

-- RenameIndex
ALTER INDEX "warehouse.id_unique" RENAME TO "warehouse_id_key";

-- RenameIndex
ALTER INDEX "webhooks.name_unique" RENAME TO "webhooks_name_key";
