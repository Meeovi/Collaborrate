/*
  Warnings:

  - You are about to drop the column `recipients` on the `emails` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `emails` table. All the data in the column will be lost.
  - You are about to drop the column `add_column_options` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `catalog_input_type_store_owner` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `comparable_storefront` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `default_value` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `input_validation_store_owner` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `scope` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `unique_value` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `values_required` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `public` on the `warehouse` table. All the data in the column will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reward_points` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sales_settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "articles" ADD COLUMN     "isPublic" TEXT,
ADD COLUMN     "meta_description" TEXT,
ADD COLUMN     "meta_name" TEXT,
ADD COLUMN     "meta_url" TEXT,
ADD COLUMN     "tags" TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "published" DROP DEFAULT,
ALTER COLUMN "published" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "emails" DROP COLUMN "recipients",
DROP COLUMN "title",
ADD COLUMN     "bcc" TEXT,
ADD COLUMN     "cc" TEXT,
ADD COLUMN     "from" TEXT,
ADD COLUMN     "media" TEXT,
ADD COLUMN     "staff_id" INTEGER,
ALTER COLUMN "subject" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "product_attribute" DROP COLUMN "add_column_options",
DROP COLUMN "catalog_input_type_store_owner",
DROP COLUMN "comparable_storefront",
DROP COLUMN "default_value",
DROP COLUMN "input_validation_store_owner",
DROP COLUMN "scope",
DROP COLUMN "unique_value",
DROP COLUMN "values_required",
ADD COLUMN     "attribute_class" TEXT,
ADD COLUMN     "attribute_value" TEXT,
ADD COLUMN     "column_options" TEXT,
ADD COLUMN     "faceted_navigation" BOOLEAN,
ADD COLUMN     "isPublic" TEXT,
ADD COLUMN     "meta_description" TEXT,
ADD COLUMN     "meta_name" BOOLEAN,
ADD COLUMN     "meta_url" TEXT,
ALTER COLUMN "filter_options" SET DATA TYPE TEXT,
ALTER COLUMN "use_search" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "quotes" ADD COLUMN     "account" TEXT,
ADD COLUMN     "approval_issues" TEXT,
ADD COLUMN     "approval_status" TEXT,
ADD COLUMN     "assigned_to" TEXT,
ADD COLUMN     "billing_city" TEXT,
ADD COLUMN     "billing_country" TEXT,
ADD COLUMN     "billing_postal" TEXT,
ADD COLUMN     "billing_state" TEXT,
ADD COLUMN     "billing_street" TEXT,
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "currency" TEXT,
ADD COLUMN     "discount" TEXT,
ADD COLUMN     "invoice_status" TEXT,
ADD COLUMN     "line_item_discount" TEXT,
ADD COLUMN     "line_item_group_total" TEXT,
ADD COLUMN     "line_item_name" TEXT,
ADD COLUMN     "line_item_subtotal" TEXT,
ADD COLUMN     "line_item_tax" TEXT,
ADD COLUMN     "line_item_total" TEXT,
ADD COLUMN     "payment_terms" TEXT,
ADD COLUMN     "shipping" TEXT,
ADD COLUMN     "shipping_city" TEXT,
ADD COLUMN     "shipping_country" TEXT,
ADD COLUMN     "shipping_postal" TEXT,
ADD COLUMN     "shipping_state" TEXT,
ADD COLUMN     "shipping_street" TEXT,
ADD COLUMN     "shipping_tax" TEXT,
ADD COLUMN     "subtotal" TEXT,
ADD COLUMN     "tax" TEXT,
ADD COLUMN     "total" TEXT;

-- AlterTable
ALTER TABLE "shipments" ADD COLUMN     "client_id" TEXT,
ADD COLUMN     "client_secret" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "website" TEXT,
ALTER COLUMN "product" DROP NOT NULL,
ALTER COLUMN "speed_grade" DROP NOT NULL;

-- AlterTable
ALTER TABLE "shops" ADD COLUMN     "country" TEXT,
ADD COLUMN     "physical_store" TEXT,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "website" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "warehouse" DROP COLUMN "public",
ADD COLUMN     "isPublic" TEXT;

-- DropTable
DROP TABLE "customer";

-- DropTable
DROP TABLE "reward_points";

-- DropTable
DROP TABLE "sales_settings";

-- CreateTable
CREATE TABLE "meeting" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "subject" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "duration" TEXT,
    "status" TEXT,
    "related_to" TEXT,
    "reminders" TEXT,
    "content" TEXT,
    "assigned_to" TEXT,
    "invitees" TEXT,
    "scheduling" TEXT,

    CONSTRAINT "meeting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ooto" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "login" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "note" TEXT,
    "using_time" TEXT,
    "location" TEXT,

    CONSTRAINT "ooto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "website" TEXT,
    "office_phone" TEXT,
    "fax" TEXT,
    "email" TEXT,
    "address" TEXT,
    "postalcode" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "assigned_to" TEXT,
    "alt_address" TEXT,
    "alt_postalcode" TEXT,
    "alt_city" TEXT,
    "alt_state" TEXT,
    "alt_country" TEXT,
    "type" TEXT,
    "industry" TEXT,
    "employees" TEXT,
    "annual_revenue" TEXT,
    "member_of" TEXT,
    "campaign" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_templates" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "assigned_to" TEXT,
    "type" TEXT,
    "active" TEXT,
    "insert_variable" TEXT,
    "subject" TEXT,
    "content" TEXT,
    "header" TEXT,
    "footer" TEXT,
    "width" TEXT,
    "height" TEXT,
    "media" TEXT,

    CONSTRAINT "email_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "importm" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "description" TEXT,
    "file" TEXT,
    "url" TEXT,
    "image" TEXT,

    CONSTRAINT "importm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrations" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "content" TEXT,
    "media" TEXT,
    "location" TEXT,
    "category" TEXT,

    CONSTRAINT "integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "knowledgebase" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "status" TEXT,
    "revision" TEXT,
    "content" TEXT,
    "resolution" TEXT,
    "author" TEXT,
    "approver" TEXT,
    "date_modified" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "knowledgebase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "client_id" TEXT,
    "client_secret" TEXT,
    "host_uri" TEXT,
    "redirect_url" TEXT,
    "redirect_url_app" TEXT,
    "icon" TEXT,
    "name" TEXT NOT NULL,
    "active" TEXT,
    "country" TEXT,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pdf_templates" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "assigned_to" TEXT,
    "type" TEXT,
    "active" TEXT,
    "page_size" TEXT,
    "orientation" TEXT,
    "content" TEXT,
    "header" TEXT,
    "footer" TEXT,
    "margin_left" TEXT,
    "margin_right" TEXT,
    "margin_top" TEXT,
    "margin_bottom" TEXT,
    "margin_header" TEXT,
    "margin_footer" TEXT,

    CONSTRAINT "pdf_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_templates" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "status" TEXT,
    "consider_working_days" TEXT,
    "priority" TEXT,
    "project_manager" TEXT,
    "resource" TEXT,
    "content" TEXT,

    CONSTRAINT "project_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "level" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checklist" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "location" TEXT,
    "regional_manager" TEXT,
    "manager" TEXT,
    "description" TEXT,
    "ticket" TEXT,
    "project" TEXT,
    "region" TEXT,
    "country" TEXT,
    "media" TEXT,
    "prod_id" TEXT,

    CONSTRAINT "checklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_type" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT,
    "number" DECIMAL,
    "json" JSON,
    "link" TEXT,
    "email" TEXT,
    "uid" UUID,
    "date" DATE,
    "time" TIME(6),
    "timestamp" TIMESTAMPTZ(6),
    "boolean" BOOLEAN,
    "rich_text" TEXT,
    "password" TEXT,
    "media" TEXT,
    "database_name" TEXT,

    CONSTRAINT "content_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plugins" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "url" TEXT,
    "github_link" TEXT,
    "description" TEXT,
    "logo" TEXT,
    "screenshots" TEXT,
    "last_updated" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "publisher_name" TEXT,
    "agree_terms" BOOLEAN,
    "publisher_email" TEXT,

    CONSTRAINT "plugins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_types" (
    "id" SERIAL NOT NULL,
    "type_name" TEXT,
    "taxes" TEXT,
    "isShippable" TEXT,
    "meta_url" TEXT,
    "meta_description" TEXT,
    "filter_options" TEXT,
    "product_type" TEXT,
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "product_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticketing" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "location" TEXT,
    "date" TEXT,
    "severity" TEXT,
    "team" TEXT,
    "requester" TEXT,
    "requester_email" TEXT,
    "content" TEXT,
    "department" TEXT,
    "media" TEXT,
    "projects" TEXT,
    "ticket_type" TEXT,
    "comment" TEXT,
    "products" TEXT,
    "priority" TEXT,
    "status" TEXT,
    "resolution" TEXT,
    "assigned_to" TEXT,
    "date_modified" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "account_name" TEXT,
    "level" TEXT,

    CONSTRAINT "ticketing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visits" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT,
    "username" TEXT,
    "reason" TEXT,
    "content" TEXT,
    "emergency" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "task" TEXT,
    "meeting" TEXT,

    CONSTRAINT "visits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "channels" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "currency" TEXT,
    "default_lang" TEXT,
    "include_tax" TEXT,
    "default_zone" TEXT,
    "default_shipping" TEXT,
    "client_id" TEXT,
    "client_secret" TEXT,

    CONSTRAINT "channels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currencies" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "region" TEXT,

    CONSTRAINT "currencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "from" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "subject" TEXT,
    "content" TEXT,
    "sender" TEXT,
    "cust_id" SERIAL NOT NULL,
    "media" TEXT,
    "staff_id" INTEGER,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "isPublic" TEXT,
    "business_type" TEXT,

    CONSTRAINT "partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settingscustomers" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "login_as_customer" TEXT,
    "share_customer_accounts" TEXT,
    "online_minutes_interval" TEXT,
    "customer_data_lifetime" TEXT,
    "email_after_registration" TEXT,

    CONSTRAINT "settingscustomers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settingsgeneral" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "site_title" TEXT,
    "site_tagline" TEXT,
    "site_website" TEXT,
    "email" TEXT,
    "aws_s3" TEXT,
    "google_drive" TEXT,

    CONSTRAINT "settingsgeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settingshop" (
    "id" BIGSERIAL NOT NULL,
    "enable_product_assignment" TEXT,
    "product_videos" TEXT,
    "seller_payouts" TEXT,
    "admin_approval" TEXT,
    "enable_review_system" TEXT,
    "customer_rate_vendor" TEXT,
    "multishipping" TEXT,
    "vendor_transaction_id" TEXT,
    "enable_vendor_product_attribute" TEXT,

    CONSTRAINT "settingshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settingsmarketing" (
    "id" BIGSERIAL NOT NULL,
    "mail_port" TEXT,
    "recaptcha_api" TEXT,
    "adsense_api" TEXT,
    "sitemap_url" TEXT,
    "customer_data_lifetime" TEXT,
    "mail_server" TEXT,

    CONSTRAINT "settingsmarketing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settingssales" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "analytics_account_type" TEXT,
    "analytics_account_number" TEXT,
    "analytics_anonymizeip" TEXT,
    "analytics_content_experiments" TEXT,
    "adwords_conversionid" TEXT,
    "adwords_conversionlanguage" TEXT,
    "adwords_conversionformat" TEXT,
    "adwords_conversioncolor" TEXT,
    "adwords_conversionlabel" TEXT,
    "adwords_conversionvalue_type" TEXT,
    "adwords_sendorder" TEXT,
    "tag_manager_anonymizeip" TEXT,
    "tag_manager_contentexperiments" TEXT,
    "tag_manager_containerid" TEXT,

    CONSTRAINT "settingssales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_category" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "default" TEXT,

    CONSTRAINT "tax_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishlists" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "customers" TEXT,
    "visibility" TEXT,
    "products" TEXT,
    "quantity" TEXT,

    CONSTRAINT "wishlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zones" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "scope" TEXT,
    "type" TEXT,
    "country" TEXT,
    "code" TEXT,

    CONSTRAINT "zones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_id_key" ON "payments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_name_key" ON "payments"("name");

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_types" ADD CONSTRAINT "product_types_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
