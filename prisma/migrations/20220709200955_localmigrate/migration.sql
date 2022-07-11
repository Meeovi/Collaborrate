/*
  Warnings:

  - You are about to drop the column `attribute_set` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "permissions" ADD COLUMN     "create" TEXT,
ADD COLUMN     "delete" TEXT,
ADD COLUMN     "read" TEXT,
ADD COLUMN     "role" TEXT,
ADD COLUMN     "update" TEXT,
ADD COLUMN     "users" TEXT;

-- AlterTable
ALTER TABLE "polls" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "excerpt" SET DATA TYPE TEXT,
ALTER COLUMN "published" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "question" SET DATA TYPE TEXT,
ALTER COLUMN "response" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "attribute_set",
DROP COLUMN "type",
ADD COLUMN     "attributes" TEXT,
ADD COLUMN     "brand" TEXT,
ADD COLUMN     "contract" TEXT,
ADD COLUMN     "cost_string" TEXT,
ADD COLUMN     "customer_type" TEXT,
ADD COLUMN     "family" TEXT,
ADD COLUMN     "manufacturer_part_number" TEXT,
ADD COLUMN     "occassions" TEXT,
ADD COLUMN     "part_number" TEXT,
ADD COLUMN     "related_product" BIGINT,
ADD COLUMN     "tags" TEXT,
ADD COLUMN     "types" TEXT,
ADD COLUMN     "variants" TEXT,
ADD COLUMN     "zone" TEXT;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "assignee" TEXT,
ADD COLUMN     "cust_id" INTEGER,
ADD COLUMN     "doing" TEXT,
ADD COLUMN     "done" TEXT,
ADD COLUMN     "goal_collaborators" TEXT,
ADD COLUMN     "goal_measurement" TEXT,
ADD COLUMN     "goal_name" TEXT,
ADD COLUMN     "goal_privacy" TEXT,
ADD COLUMN     "goal_progress_source" TEXT,
ADD COLUMN     "goal_timeperiod" TEXT,
ADD COLUMN     "goal_updatemethod" TEXT,
ADD COLUMN     "priority" TEXT,
ADD COLUMN     "section_rule" TEXT,
ADD COLUMN     "staff_id" INTEGER,
ADD COLUMN     "task_id" BIGINT,
ADD COLUMN     "ticket_id" BIGINT;

-- DropTable
DROP TABLE "role";

-- CreateTable
CREATE TABLE "analytics" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "country" TEXT,
    "share_data" TEXT,
    "website_name" TEXT,
    "client_id" TEXT,
    "client_secret" TEXT,
    "tracking_id" TEXT,
    "property_name" TEXT,
    "url" TEXT,
    "default_view" TEXT,
    "category" TEXT,
    "property_hit" TEXT,
    "tracking_code" TEXT,
    "data_collection" BOOLEAN,
    "data_retention" BOOLEAN,
    "search_analytics" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dashboards" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "client_id" TEXT,
    "client_secret" TEXT,
    "privacy" TEXT,
    "category" TEXT,
    "url" TEXT,
    "media" TEXT,
    "task" TEXT,
    "reports" TEXT,
    "tasks" TEXT,
    "projects" TEXT,
    "tickets" TEXT,
    "customers" TEXT,
    "checklists" TEXT,
    "visits" TEXT,
    "users" TEXT,
    "products" TEXT,
    "articles" TEXT,
    "sales" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "country" TEXT,
    "state" TEXT,
    "isPublic" TEXT,
    "city" TEXT,
    "product" BIGINT,
    "description" TEXT,
    "media" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufacturer" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "country" TEXT,
    "state" TEXT,
    "isPublic" TEXT,
    "city" TEXT,
    "product" BIGINT,
    "description" TEXT,
    "media" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mediamanager" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "description" TEXT,
    "media" TEXT,
    "keywords" TEXT,
    "tags" TEXT,
    "brands" BIGINT,
    "status" TEXT,
    "expiration_date" TEXT,
    "copyright" TEXT,
    "dimensions" TEXT,
    "author" INTEGER,
    "content_type" TEXT,
    "versions" TEXT,
    "watermark_name" TEXT,
    "watermark_description" TEXT,
    "watermark_media" TEXT,
    "agreements" INTEGER,
    "albums" TEXT,
    "comment" INTEGER,
    "workspace" TEXT,
    "task_name" BIGINT,
    "task_description" TEXT,
    "task_type" TEXT,
    "members" INTEGER,
    "products" BIGINT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "occassions" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "category" TEXT,
    "tags" TEXT,
    "description" TEXT,
    "products" BIGINT,
    "wishlists" BIGINT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspaces" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "description" TEXT,
    "customers" INTEGER,
    "users" INTEGER,
    "products" BIGINT,
    "tasks" BIGINT,
    "brands" BIGINT,
    "shops" INTEGER,
    "category" INTEGER,
    "isPublic" BOOLEAN,
    "projects" BIGINT,
    "author" TEXT,
    "media" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customizations" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "site_name" TEXT,
    "nav_link" TEXT,
    "notification" TEXT,
    "banner" TEXT,
    "footer_link" TEXT,
    "announcement" TEXT,
    "email" TEXT,
    "site_url" TEXT,
    "allow_signup" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "role_name" TEXT NOT NULL,
    "content" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Audience" (
    "objectId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "name" TEXT,
    "query" TEXT,
    "lastUsed" TIMESTAMPTZ(6),
    "timesUsed" DOUBLE PRECISION,
    "_rperm" TEXT[],
    "_wperm" TEXT[],

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_GlobalConfig" (
    "objectId" TEXT NOT NULL,
    "params" JSONB,
    "masterKeyOnly" JSONB,

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_GraphQLConfig" (
    "objectId" TEXT NOT NULL,
    "config" JSONB,

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_Hooks" (
    "functionName" TEXT,
    "className" TEXT,
    "triggerName" TEXT,
    "url" TEXT
);

-- CreateTable
CREATE TABLE "_Idempotency" (
    "objectId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "reqId" TEXT,
    "expire" TIMESTAMPTZ(6),
    "_rperm" TEXT[],
    "_wperm" TEXT[],

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_JobSchedule" (
    "objectId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "jobName" TEXT,
    "description" TEXT,
    "params" TEXT,
    "startAfter" TEXT,
    "daysOfWeek" JSONB,
    "timeOfDay" TEXT,
    "lastRun" DOUBLE PRECISION,
    "repeatMinutes" DOUBLE PRECISION,
    "_rperm" TEXT[],
    "_wperm" TEXT[],

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_JobStatus" (
    "objectId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "jobName" TEXT,
    "source" TEXT,
    "status" TEXT,
    "message" TEXT,
    "params" JSONB,
    "finishedAt" TIMESTAMPTZ(6),
    "_rperm" TEXT[],
    "_wperm" TEXT[],

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_Join:roles:_Role" (
    "relatedId" VARCHAR(120) NOT NULL,
    "owningId" VARCHAR(120) NOT NULL,

    PRIMARY KEY ("relatedId","owningId")
);

-- CreateTable
CREATE TABLE "_Join:users:_Role" (
    "relatedId" VARCHAR(120) NOT NULL,
    "owningId" VARCHAR(120) NOT NULL,

    PRIMARY KEY ("relatedId","owningId")
);

-- CreateTable
CREATE TABLE "_PushStatus" (
    "objectId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "pushTime" TEXT,
    "source" TEXT,
    "query" TEXT,
    "payload" TEXT,
    "title" TEXT,
    "expiry" DOUBLE PRECISION,
    "expiration_interval" DOUBLE PRECISION,
    "status" TEXT,
    "numSent" DOUBLE PRECISION,
    "numFailed" DOUBLE PRECISION,
    "pushHash" TEXT,
    "errorMessage" JSONB,
    "sentPerType" JSONB,
    "failedPerType" JSONB,
    "sentPerUTCOffset" JSONB,
    "failedPerUTCOffset" JSONB,
    "count" DOUBLE PRECISION,
    "_rperm" TEXT[],
    "_wperm" TEXT[],

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_Role" (
    "objectId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "name" TEXT,
    "_rperm" TEXT[],
    "_wperm" TEXT[],

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "_SCHEMA" (
    "className" VARCHAR(120) NOT NULL,
    "schema" JSONB,
    "isParseClass" BOOLEAN,

    PRIMARY KEY ("className")
);

-- CreateTable
CREATE TABLE "_User" (
    "objectId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),
    "username" TEXT,
    "email" TEXT,
    "emailVerified" BOOLEAN,
    "authData" JSONB,
    "_rperm" TEXT[],
    "_wperm" TEXT[],
    "_hashed_password" TEXT,
    "_email_verify_token_expires_at" TIMESTAMPTZ(6),
    "_email_verify_token" TEXT,
    "_account_lockout_expires_at" TIMESTAMPTZ(6),
    "_failed_login_count" DOUBLE PRECISION,
    "_perishable_token" TEXT,
    "_perishable_token_expires_at" TIMESTAMPTZ(6),
    "_password_changed_at" TIMESTAMPTZ(6),
    "_password_history" JSONB,

    PRIMARY KEY ("objectId")
);

-- CreateTable
CREATE TABLE "invitations" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "invoiceDate" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "billingAddress" TEXT,
    "shippingAddress" TEXT,
    "orderNumber" TEXT,
    "grandTotalPurchased" TEXT,
    "paymentMethod" TEXT,
    "status" TEXT,
    "media" TEXT,
    "content" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainings" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "subject" TEXT,
    "content" TEXT,
    "media" TEXT,
    "link" TEXT,
    "steps" TEXT,
    "updated" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "analytics" TEXT,
    "competency" TEXT,
    "course" TEXT,
    "grade" TEXT,
    "school" TEXT,
    "comment" INTEGER,
    "address" TEXT,
    "country" INTEGER,
    "state" INTEGER,
    "postal" TEXT,
    "teacher" TEXT,
    "student" TEXT,
    "anncouncement" TEXT,
    "resource" TEXT,
    "badges" TEXT,
    "isPublic" TEXT,
    "isCompleted" TEXT,
    "speakers" TEXT,
    "fieldTrips" TEXT,
    "assignments" TEXT,
    "assignmentsDueDate" TEXT,
    "origanlityReport" TEXT,
    "products" BIGINT,
    "faqs" TEXT,
    "languages" TEXT,
    "checklists" BIGINT,
    "city" TEXT,
    "meetups" TEXT,
    "lab" TEXT,
    "digiboards" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endofshift" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "login" TEXT,
    "mcms" TEXT,
    "next_shift" TEXT,
    "projects" TEXT,
    "tickets" TEXT,
    "whid" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scheduler" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "end_date" TEXT,
    "level" TEXT,
    "login" TEXT,
    "notes" TEXT,
    "start_date" TEXT,
    "whid" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deepdive" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "end_date" TEXT,
    "content" TEXT,
    "attendees" TEXT,
    "login" TEXT,
    "start_date" TEXT,
    "whid" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_Idempotency.reqId_unique" ON "_Idempotency"("reqId");

-- CreateIndex
CREATE INDEX "_Idempotency.expire_index" ON "_Idempotency"("expire");

-- CreateIndex
CREATE UNIQUE INDEX "_Role.name_unique" ON "_Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_User.username_unique" ON "_User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_User.email_unique" ON "_User"("email");

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("related_product") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD FOREIGN KEY ("staff_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD FOREIGN KEY ("ticket_id") REFERENCES "ticketing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brands" ADD FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manufacturer" ADD FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD FOREIGN KEY ("agreements") REFERENCES "agreements"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD FOREIGN KEY ("author") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD FOREIGN KEY ("brands") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD FOREIGN KEY ("comment") REFERENCES "comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD FOREIGN KEY ("members") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mediamanager" ADD FOREIGN KEY ("task_name") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occassions" ADD FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occassions" ADD FOREIGN KEY ("wishlists") REFERENCES "wishlists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("brands") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("category") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("customers") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("projects") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("shops") REFERENCES "shops"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("tasks") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaces" ADD FOREIGN KEY ("users") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD FOREIGN KEY ("checklists") REFERENCES "checklist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD FOREIGN KEY ("comment") REFERENCES "comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD FOREIGN KEY ("country") REFERENCES "countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD FOREIGN KEY ("products") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD FOREIGN KEY ("state") REFERENCES "states"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "apitoken_name_key" RENAME TO "apitoken.name_unique";

-- RenameIndex
ALTER INDEX "apitoken_token_key" RENAME TO "apitoken.token_unique";

-- RenameIndex
ALTER INDEX "customer_payment_account_no_key" RENAME TO "customer_payment.account_no_unique";

-- RenameIndex
ALTER INDEX "customer_payment_cust_id_key" RENAME TO "customer_payment.cust_id_unique";

-- RenameIndex
ALTER INDEX "newsletter_subscribers_email_key" RENAME TO "newsletter_subscribers.email_unique";

-- RenameIndex
ALTER INDEX "payments_id_key" RENAME TO "payments.id_unique";

-- RenameIndex
ALTER INDEX "payments_name_key" RENAME TO "payments.name_unique";

-- RenameIndex
ALTER INDEX "permissions_id_key" RENAME TO "permissions.id_unique";

-- RenameIndex
ALTER INDEX "products_sku_key" RENAME TO "products.sku_unique";

-- RenameIndex
ALTER INDEX "providers_id_key" RENAME TO "providers.id_unique";

-- RenameIndex
ALTER INDEX "providers_name_key" RENAME TO "providers.name_unique";

-- RenameIndex
ALTER INDEX "segments_id_key" RENAME TO "segments.id_unique";

-- RenameIndex
ALTER INDEX "warehouse_id_key" RENAME TO "warehouse.id_unique";

-- RenameIndex
ALTER INDEX "webhooks_name_key" RENAME TO "webhooks.name_unique";
