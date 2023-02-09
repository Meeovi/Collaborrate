-- CreateTable
CREATE TABLE "accounts" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "agreements" (
    "id" BIGSERIAL NOT NULL,
    "reference_id" TEXT,
    "created" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "name" TEXT,
    "image" TEXT,
    "excerpt" TEXT,
    "type" TEXT,
    "user_id" TEXT,
    "shop_id" TEXT,
    "mediamanager" TEXT,

    CONSTRAINT "agreements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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

    CONSTRAINT "analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apitoken" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "token_type" TEXT,
    "description" TEXT,
    "token" BIGINT NOT NULL,

    CONSTRAINT "apitoken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "excerpt" TEXT,
    "content" TEXT,
    "image" TEXT,
    "categories" TEXT,
    "customers" TEXT,
    "users" TEXT,
    "published" TEXT,
    "cust_id" TEXT,
    "isPublic" TEXT,
    "meta_description" TEXT,
    "meta_name" TEXT,
    "meta_url" TEXT,
    "tags" TEXT,
    "type" TEXT,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "country" TEXT,
    "state" TEXT,
    "isPublic" TEXT,
    "city" TEXT,
    "product" BIGINT,
    "description" TEXT,
    "media" TEXT,
    "mediamanager" TEXT,
    "products" TEXT,
    "workspaces" TEXT,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_price_rules" (
    "id" SERIAL NOT NULL,
    "rule" TEXT,
    "description" TEXT,
    "active" BOOLEAN,
    "coupon" TEXT,
    "uses_per_customer" TEXT,
    "priority" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "status" TEXT,
    "website" TEXT,
    "actions_apply" TEXT,
    "actions_discount_amount" DECIMAL(10,0),
    "actions_discard_subsequent_rules" BOOLEAN,
    "actions_max_qty_discount_is_applied_to" DECIMAL(10,0),
    "actions_discount_qty_step" DECIMAL(10,0),
    "actions_apply_shipping_amount" BOOLEAN,

    CONSTRAINT "cart_price_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cases" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "case_number" SMALLINT,
    "state" TEXT,
    "type" TEXT,
    "subject" TEXT,
    "description" TEXT,
    "resolution" TEXT,
    "priority" TEXT,
    "status" TEXT,
    "account_name" TEXT,
    "assigned_to" TEXT,
    "date_modified" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog_price_rule" (
    "id" SERIAL NOT NULL,
    "rule" TEXT,
    "description" TEXT,
    "active" BOOLEAN,
    "customer_groups" TEXT,
    "priority" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "status" TEXT,
    "website" TEXT,
    "actions_apply" TEXT,
    "actions_discount_amount" DECIMAL(10,0),
    "actions_discard_subsequent_rules" BOOLEAN,

    CONSTRAINT "catalog_price_rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "name" TEXT NOT NULL,
    "visibility" TEXT,
    "status" BOOLEAN,
    "websites" TEXT,
    "product" TEXT,
    "country" TEXT,
    "description" TEXT,
    "content" TEXT,
    "image" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,
    "meta_url" TEXT,
    "workspaces" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "channels" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "checklist" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "trainings" TEXT,
    "task" TEXT,
    "type" TEXT,

    CONSTRAINT "checklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postalCode" TEXT,
    "image" TEXT,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collections" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "description" TEXT,
    "image" TEXT,
    "product" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "customer_name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "response" TEXT,
    "published" TIMESTAMP(3),
    "cust_id" INTEGER NOT NULL,
    "customers" TEXT,
    "mediamanager" TEXT,
    "trainings" TEXT,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_type" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT,
    "number" DECIMAL(10,0),
    "json" JSONB,
    "link" TEXT,
    "email" TEXT,
    "uid" TEXT,
    "date" DATE,
    "time" TIME(6),
    "timestamp" TIMESTAMP(3),
    "boolean" BOOLEAN,
    "rich_text" TEXT,
    "password" TEXT,
    "media" TEXT,
    "database_name" TEXT,

    CONSTRAINT "content_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" BIGSERIAL NOT NULL,
    "contract_title" TEXT,
    "contract_value" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "renewal_reminder" TEXT,
    "customer_signed_date" TEXT,
    "company_signed_date" TEXT,
    "status" TEXT,
    "contract_manager" TEXT,
    "account" TEXT,
    "contact" TEXT,
    "description" TEXT,
    "opportunity" TEXT,
    "contract_type" TEXT,
    "currency" TEXT,
    "line_items" TEXT,
    "total" TEXT,
    "discount" TEXT,
    "subtotal" TEXT,
    "shipping" TEXT,
    "shipping_tax" TEXT,
    "tax" TEXT,
    "grand_total" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "region" TEXT,
    "trainings" TEXT,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupons" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "discount" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "expiration" TEXT,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,
    "prod_id" BIGINT NOT NULL,
    "products_couponsToproducts" TEXT,

    CONSTRAINT "coupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_memos" (
    "credit_memo" TEXT NOT NULL,
    "order_number" INTEGER NOT NULL,
    "created" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "bill_to_name" TEXT NOT NULL,
    "status" TEXT,
    "refunded" TEXT,
    "action" TEXT,
    "id" BIGINT NOT NULL,
    "cust_id" INTEGER NOT NULL,
    "prod_id" BIGINT NOT NULL,
    "customers" TEXT,
    "products" TEXT,

    CONSTRAINT "credit_memos_pkey" PRIMARY KEY ("credit_memo","id")
);

-- CreateTable
CREATE TABLE "currencies" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "region" TEXT,

    CONSTRAINT "currencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currency_rates" (
    "import_service" TEXT NOT NULL,
    "usd" DECIMAL(65,30),
    "id" BIGINT NOT NULL,

    CONSTRAINT "currency_rates_pkey" PRIMARY KEY ("import_service")
);

-- CreateTable
CREATE TABLE "currency_symbols" (
    "symbol" TEXT NOT NULL,
    "use_standard" BOOLEAN,
    "id" BIGSERIAL NOT NULL,

    CONSTRAINT "currency_symbols_pkey" PRIMARY KEY ("symbol")
);

-- CreateTable
CREATE TABLE "customer_group" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "tax_class" TEXT,
    "cust_id" INTEGER NOT NULL,
    "customers" TEXT,
    "content" TEXT,
    "image" TEXT,
    "coverPhoto" TEXT,

    CONSTRAINT "customer_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "name_prefix" TEXT,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "customer_group" TEXT,
    "phone" TEXT,
    "zipcode" TEXT,
    "name_suffix" TEXT,
    "websites" TEXT,
    "product" TEXT,
    "country" TEXT,
    "state" TEXT,
    "customer_since" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "confirmed_email" TEXT,
    "date_of_birth" TEXT,
    "tax_vat_number" TEXT,
    "gender" TEXT,
    "description" TEXT,
    "short_description" TEXT,
    "image" TEXT,
    "Address" TEXT,
    "address_two" TEXT,
    "payment_type" TEXT,
    "username" TEXT,
    "password" TEXT,
    "comments" TEXT,
    "credit_memos" TEXT,
    "customer_payment" TEXT,
    "emails" TEXT,
    "mediamanager" TEXT,
    "messages" TEXT,
    "newsletter_subscribers" TEXT,
    "orders" TEXT,
    "projects" TEXT,
    "quotes" TEXT,
    "returns" TEXT,
    "workspaces" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customizations" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "site_name" TEXT,
    "nav_link" TEXT,
    "notification" TEXT,
    "banner" TEXT,
    "footer_link" TEXT,
    "announcement" TEXT,
    "email" TEXT,
    "site_url" TEXT,
    "allow_signup" TEXT,

    CONSTRAINT "customizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dashboards" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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

    CONSTRAINT "dashboards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deepdive" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "end_date" TEXT,
    "content" TEXT,
    "attendees" TEXT,
    "login" TEXT,
    "start_date" TEXT,
    "whid" TEXT,

    CONSTRAINT "deepdive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templates" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "emails" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "subject" TEXT,
    "content" TEXT,
    "cust_id" INTEGER NOT NULL,
    "bcc" TEXT,
    "cc" TEXT,
    "from" TEXT,
    "media" TEXT,
    "staff_id" INTEGER,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "content" TEXT,
    "tickets" TEXT,
    "image" TEXT,
    "start" TEXT,
    "end" TEXT,
    "category" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postalcode" TEXT,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fullfillments" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "shipping_zones" TEXT,
    "company" TEXT,
    "address" TEXT,
    "address_two" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipcode" TEXT,
    "country" TEXT,
    "country area" TEXT,
    "phone" TEXT,
    "pickup" TEXT,
    "stock" TEXT,

    CONSTRAINT "fullfillments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gift_certificates" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "discount" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "special_offers" TEXT,
    "rewards" TEXT,
    "coupons" TEXT,
    "expiration" TEXT,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,
    "type" TEXT,

    CONSTRAINT "gift_certificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "glossary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(3),

    CONSTRAINT "glossary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "importm" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "content" TEXT,
    "media" TEXT,
    "location" TEXT,
    "category" TEXT,

    CONSTRAINT "integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internalization" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "region" TEXT,
    "description" TEXT,
    "default" TEXT,
    "website" TEXT,

    CONSTRAINT "internalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invitations" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "invoiceDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "billingAddress" TEXT,
    "shippingAddress" TEXT,
    "orderNumber" TEXT,
    "grandTotalPurchased" TEXT,
    "paymentMethod" TEXT,
    "status" TEXT,
    "media" TEXT,
    "content" TEXT,

    CONSTRAINT "invitations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "invoice" INTEGER NOT NULL,
    "order_number" BIGINT NOT NULL,
    "invoice_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "bill_to_name" TEXT NOT NULL,
    "billing_address" TEXT,
    "grand_total_base" TEXT,
    "grand_total_purchased" TEXT,
    "status" TEXT,
    "shipping_address" TEXT,
    "customer_name" TEXT,
    "email" TEXT,
    "customer_group" TEXT,
    "payment_method" TEXT,
    "shipping_information" TEXT,
    "subtotal" TEXT,
    "shipping_and_handling" TEXT,
    "id" BIGSERIAL NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "Prefix" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "department" TEXT,
    "account_name" TEXT,
    "address" TEXT,
    "postalcode" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "email" TEXT,
    "description" TEXT,
    "fax" TEXT,
    "website" TEXT,
    "mobile" TEXT,
    "job_title" TEXT,
    "alt_address" TEXT,
    "alt_postalcode" TEXT,
    "alt_city" TEXT,
    "alt_state" TEXT,
    "alt_country" TEXT,
    "office_phone" TEXT,
    "status" TEXT,
    "status_description" TEXT,
    "opportunity_amount" TEXT,
    "campaign" TEXT,
    "lead_source" TEXT,
    "lead_source_description" TEXT,
    "referred_by" TEXT,
    "customer_name" TEXT,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufacturer" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "name" TEXT,
    "country" TEXT,
    "state" TEXT,
    "isPublic" TEXT,
    "city" TEXT,
    "product" BIGINT,
    "description" TEXT,
    "media" TEXT,
    "products" TEXT,

    CONSTRAINT "manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mediamanager" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "agreements_agreementsTomediamanager" TEXT,
    "brands_brandsTomediamanager" TEXT,
    "comments" TEXT,
    "customers" TEXT,
    "products_mediamanagerToproducts" TEXT,
    "tasks" TEXT,
    "users" TEXT,

    CONSTRAINT "mediamanager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meeting" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "from" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "subject" TEXT,
    "content" TEXT,
    "sender" TEXT,
    "cust_id" INTEGER NOT NULL,
    "media" TEXT,
    "staff_id" INTEGER,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ooto" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "login" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "note" TEXT,
    "using_time" TEXT,
    "location" TEXT,

    CONSTRAINT "ooto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opportunities" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "amount" TEXT,
    "sales_stage" TEXT,
    "currency" TEXT,
    "probability" TEXT,
    "next_step" TEXT,
    "description" TEXT,
    "assigned_to" TEXT,
    "lead_source" TEXT,
    "campaign" TEXT,
    "type" TEXT,
    "account_name" TEXT,
    "expected_close_date" TEXT,

    CONSTRAINT "opportunities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "purchase_point" INTEGER,
    "purchase_date" TIMESTAMP(3),
    "bill_to_name" TEXT NOT NULL,
    "ship_to_name" TEXT,
    "grand_total_base" INTEGER,
    "grand_total_purchased" INTEGER,
    "status" BOOLEAN,
    "action" BOOLEAN,
    "allocated_sources" TEXT,
    "braintree_transaction_source" TEXT,
    "cust_id" INTEGER NOT NULL,
    "prod_id" BIGINT NOT NULL,
    "customers" TEXT,
    "products" TEXT,
    "quotes" TEXT,
    "transactions" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" SERIAL NOT NULL,
    "enable_page" BOOLEAN,
    "title" TEXT NOT NULL,
    "content_title" TEXT,
    "content" TEXT,
    "url_key" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "payments" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "permissions" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "content" TEXT,
    "create" TEXT,
    "delete" TEXT,
    "read" TEXT,
    "role" TEXT,
    "update" TEXT,
    "users" TEXT,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plugins" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "url" TEXT,
    "github_link" TEXT,
    "description" TEXT,
    "logo" TEXT,
    "screenshots" TEXT,
    "last_updated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publisher_name" TEXT,
    "agree_terms" BOOLEAN,
    "publisher_email" TEXT,

    CONSTRAINT "plugins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "polls" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "description" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "question" TEXT,
    "response" TEXT,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "polls_pkey" PRIMARY KEY ("id")
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
    "prod_id" BIGINT NOT NULL,
    "products" TEXT,

    CONSTRAINT "product_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" BIGSERIAL NOT NULL,
    "sku" BIGINT NOT NULL,
    "thumbnail" TEXT,
    "name" TEXT NOT NULL,
    "price" TEXT,
    "quantity_per_source" TEXT,
    "salable_quantity" TEXT,
    "visibility" TEXT,
    "status" BOOLEAN,
    "websites" TEXT,
    "product" TEXT,
    "tax_class" TEXT,
    "stock_status" TEXT,
    "weight" TEXT,
    "categories" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT,
    "size" TEXT,
    "format" TEXT,
    "height" TEXT,
    "content" TEXT,
    "short_description" TEXT,
    "image" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,
    "meta_url" TEXT,
    "file" TEXT,
    "manufacture" TEXT,
    "attributes" TEXT,
    "brand" TEXT,
    "contract" TEXT,
    "cost_string" TEXT,
    "customer_type" TEXT,
    "family" TEXT,
    "manufacturer_part_number" TEXT,
    "occassions" TEXT,
    "part_number" TEXT,
    "related_product" BIGINT,
    "tags" TEXT,
    "types" TEXT,
    "variants" TEXT,
    "zone" TEXT,
    "brands" TEXT,
    "coupons" TEXT,
    "credit_memos" TEXT,
    "manufacturer" TEXT,
    "mediamanager" TEXT,
    "occassions_occassionsToproducts" TEXT,
    "orders" TEXT,
    "other_products" TEXT,
    "product_attribute" TEXT,
    "product_types" TEXT,
    "products" TEXT,
    "quotes" TEXT,
    "rating" TEXT,
    "returns" TEXT,
    "tax_rate" TEXT,
    "tax_rule" TEXT,
    "trainings" TEXT,
    "workspaces" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "project_manager" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "resource" TEXT,
    "considerworkingdays" TEXT,
    "project_template" TEXT,
    "status" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "assignee" TEXT,
    "cust_id" INTEGER,
    "doing" TEXT,
    "done" TEXT,
    "goal_collaborators" TEXT,
    "goal_measurement" TEXT,
    "goal_name" TEXT,
    "goal_privacy" TEXT,
    "goal_progress_source" TEXT,
    "goal_timeperiod" TEXT,
    "goal_updatemethod" TEXT,
    "priority" TEXT,
    "section_rule" TEXT,
    "staff_id" INTEGER,
    "task_id" BIGINT,
    "ticket_id" BIGINT,
    "customers" TEXT,
    "tasks" TEXT,
    "ticketing" TEXT,
    "users" TEXT,
    "workspaces" TEXT,
    "tags" TEXT,
    "product" TEXT,
    "websites" TEXT,
    "method" TEXT,
    "zone" TEXT,
    "type" TEXT,
    "team" TEXT,
    "categories" TEXT,
    "company" TEXT,
    "file" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "providers" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "client_id" TEXT,
    "client_secret" TEXT,
    "host_uri" TEXT,
    "redirect_url" TEXT,
    "redirect_url_app" TEXT,
    "icon" TEXT,
    "name" TEXT NOT NULL,
    "active" TEXT,

    CONSTRAINT "providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grand_total" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "categories" TEXT,
    "valid_until" TEXT,
    "quote_stage" TEXT,
    "customers" TEXT,
    "cust_id" INTEGER NOT NULL,
    "prod_id" BIGINT NOT NULL,
    "order_id" INTEGER NOT NULL,
    "account" TEXT,
    "approval_issues" TEXT,
    "approval_status" TEXT,
    "assigned_to" TEXT,
    "billing_city" TEXT,
    "billing_country" TEXT,
    "billing_postal" TEXT,
    "billing_state" TEXT,
    "billing_street" TEXT,
    "contact" TEXT,
    "currency" TEXT,
    "discount" TEXT,
    "invoice_status" TEXT,
    "line_item_discount" TEXT,
    "line_item_group_total" TEXT,
    "line_item_name" TEXT,
    "line_item_subtotal" TEXT,
    "line_item_tax" TEXT,
    "line_item_total" TEXT,
    "payment_terms" TEXT,
    "shipping" TEXT,
    "shipping_city" TEXT,
    "shipping_country" TEXT,
    "shipping_postal" TEXT,
    "shipping_state" TEXT,
    "shipping_street" TEXT,
    "shipping_tax" TEXT,
    "subtotal" TEXT,
    "tax" TEXT,
    "total" TEXT,
    "customers_customersToquotes" TEXT,
    "orders" TEXT,
    "products_productsToquotes" TEXT,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "default_value" TEXT,
    "default_store_view" TEXT,
    "rating_visibility" TEXT,
    "active" BOOLEAN,
    "sort_order" DECIMAL(10,0),
    "prod_id" BIGINT NOT NULL,
    "products" TEXT,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "customer" TEXT,
    "email" TEXT,
    "products" TEXT,
    "quantity" DECIMAL(10,0),
    "subtotal" TEXT,
    "applied_coupon" TEXT,
    "created" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "returns" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "validity" TEXT,
    "return_prefix" TEXT,
    "customers" TEXT,
    "products" TEXT,
    "type" TEXT,
    "description" TEXT,
    "shippingNumber" TEXT,
    "shippingDescription" TEXT,
    "status" TEXT,
    "liquidationReason" TEXT,
    "media" TEXT,
    "weight" TEXT,
    "height" TEXT,
    "howShipped" TEXT,
    "location" TEXT,
    "shipTo" TEXT,
    "case_id" TEXT,

    CONSTRAINT "returns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "content" TEXT,
    "websites" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "shop_id" INTEGER NOT NULL,
    "comment_id" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "level" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "coupons" TEXT,
    "expiration" TEXT,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "role_name" TEXT NOT NULL,
    "content" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "segments" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "description" TEXT,
    "website" TEXT,
    "status" TEXT,
    "apply_to" TEXT,
    "customers" TEXT,

    CONSTRAINT "segments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipments" (
    "product" TEXT,
    "speed_grade" TEXT,
    "ship_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "carrier_name" TEXT NOT NULL,
    "transit_time" TEXT,
    "tracking_url" TEXT,
    "image" TEXT,
    "id" BIGSERIAL NOT NULL,
    "client_id" TEXT,
    "client_secret" TEXT,
    "country" TEXT,
    "website" TEXT,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "special_discounts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "discount" DECIMAL(65,30),
    "image" TEXT,
    "published" TIMESTAMP(3),
    "rewards" TEXT,
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "special_discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "country" TEXT,
    "image" TEXT,
    "trainings" TEXT,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistics" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "description" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(3),
    "special_offers" TEXT,
    "reports" TEXT,
    "rewards" TEXT,
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "statistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stocks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN,
    "description" TEXT,
    "website" TEXT,
    "sources" TEXT,

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surveys" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "assigned_to" TEXT,
    "status" TEXT,
    "description" TEXT,
    "question" TEXT,
    "answer" TEXT,
    "submit_text" TEXT,
    "satisfied_text" TEXT,
    "neither_text" TEXT,
    "dissatisfied_text" TEXT,

    CONSTRAINT "surveys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "targets" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "Prefix" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "department" TEXT,
    "account_name" TEXT,
    "address" TEXT,
    "postalcode" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "email" TEXT,
    "description" TEXT,
    "fax" TEXT,
    "website" TEXT,
    "mobile" TEXT,
    "job_title" TEXT,
    "alt_address" TEXT,
    "alt_postalcode" TEXT,
    "alt_city" TEXT,
    "alt_state" TEXT,
    "alt_country" TEXT,
    "office_phone" TEXT,
    "customer_name" TEXT,
    "email_opt_out" TEXT,
    "donotcall" TEXT,

    CONSTRAINT "targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_category" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "default" TEXT,

    CONSTRAINT "tax_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_rate" (
    "id" SERIAL NOT NULL,
    "tax_identifier" TEXT NOT NULL,
    "zip_post_is_range" BOOLEAN,
    "postcode" TEXT,
    "state" TEXT,
    "country" TEXT,
    "rate_percent" TEXT,
    "default_store_view" TEXT,
    "prod_id" BIGINT NOT NULL,
    "products" TEXT,

    CONSTRAINT "tax_rate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_rule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tax_rate" TEXT,
    "prod_id" BIGINT NOT NULL,
    "products" TEXT,

    CONSTRAINT "tax_rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "themes" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "parent_theme" TEXT,
    "theme_path" TEXT,
    "action" TEXT,
    "website_id" BIGINT NOT NULL,
    "websites" TEXT NOT NULL,

    CONSTRAINT "themes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticketing" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "date_modified" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "account_name" TEXT,
    "level" TEXT,
    "projects_projectsToticketing" TEXT,

    CONSTRAINT "ticketing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainings" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "subject" TEXT,
    "content" TEXT,
    "media" TEXT,
    "link" TEXT,
    "steps" TEXT,
    "updated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "announcement" TEXT,
    "resource" TEXT,
    "badges" TEXT,
    "isPublic" TEXT,
    "isCompleted" TEXT,
    "speakers" TEXT,
    "fieldTrips" TEXT,
    "assignments" TEXT,
    "assignmentsDueDate" TEXT,
    "origanalityReport" TEXT,
    "products" BIGINT,
    "faqs" TEXT,
    "languages" TEXT,
    "checklists" BIGINT,
    "city" TEXT,
    "meetups" TEXT,
    "lab" TEXT,
    "digiboards" TEXT,
    "countries" TEXT,
    "states" TEXT,
    "type" TEXT,

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "transaction_id" INTEGER NOT NULL,
    "parent_transaction_id" INTEGER NOT NULL,
    "created" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "payment_method" BIGINT NOT NULL,
    "closed" TEXT,
    "customer_payment" TEXT,
    "orders" TEXT,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "upload_file" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alternativeText" TEXT,
    "caption" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "formats" JSONB,
    "hash" TEXT NOT NULL,
    "ext" TEXT,
    "mime" TEXT NOT NULL,
    "size" DECIMAL(10,2) NOT NULL,
    "url" TEXT NOT NULL,
    "previewUrl" TEXT,
    "provider" TEXT NOT NULL,
    "provider_metadata" JSONB,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "upload_file_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "interface_locale" TEXT,
    "value" TEXT,
    "permissions" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "emails" TEXT,
    "mediamanager" TEXT,
    "messages" TEXT,
    "projects" TEXT,
    "workspaces" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visits" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "warehouse" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "description" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postal" TEXT,
    "status" TEXT,
    "image" TEXT,
    "products" TEXT,
    "category" TEXT,
    "isPublic" TEXT,

    CONSTRAINT "warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhooks" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "headers" TEXT,
    "create" TEXT,
    "retrieve" TEXT,
    "update" TEXT,
    "delete" TEXT,
    "publish" TEXT,
    "unpublish" TEXT,

    CONSTRAINT "webhooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "websites" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "url" TEXT,
    "shop" TEXT,
    "store" TEXT,
    "category" VARCHAR(255),
    "themes" TEXT NOT NULL,

    CONSTRAINT "websites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishlists" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "customers" TEXT,
    "visibility" TEXT,
    "products" TEXT,
    "quantity" TEXT,
    "occassions" TEXT,

    CONSTRAINT "wishlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspaces" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "brands_brandsToworkspaces" TEXT,
    "categories" TEXT,
    "customers_customersToworkspaces" TEXT,
    "products_productsToworkspaces" TEXT,
    "projects_projectsToworkspaces" TEXT,
    "shops_shopsToworkspaces" TEXT,
    "tasks_tasksToworkspaces" TEXT,
    "users_usersToworkspaces" TEXT,

    CONSTRAINT "workspaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zones" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "scope" TEXT,
    "type" TEXT,
    "country" TEXT,
    "code" TEXT,

    CONSTRAINT "zones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endofshift" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "login" TEXT,
    "mcms" TEXT,
    "next_shift" TEXT,
    "projects" TEXT,
    "tickets" TEXT,
    "whid" TEXT,

    CONSTRAINT "endofshift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduler" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "end_date" TEXT,
    "level" TEXT,
    "login" TEXT,
    "notes" TEXT,
    "start_date" TEXT,
    "whid" TEXT,

    CONSTRAINT "scheduler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "digiboard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "board" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student" TEXT,
    "course" TEXT,

    CONSTRAINT "product_attribute_set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "store_name" TEXT,
    "store_phone" TEXT,
    "store_hours" TEXT,
    "country" TEXT,
    "region" TEXT,
    "zipcode" TEXT,
    "city" TEXT,
    "address" TEXT,
    "address_two" TEXT,
    "vat_number" TEXT,
    "allow_state" TEXT,
    "state_required_for" TEXT,
    "allow_countries" TEXT,
    "default_country" TEXT,
    "optional_zip" TEXT,
    "european_union_countries" TEXT,
    "top_destinations" TEXT,
    "base_currency" TEXT,
    "default_currency" TEXT,
    "allowed_currency" TEXT,
    "siteName" TEXT,
    "siteWebsite" TEXT,
    "sentryDsn" TEXT,
    "awsS3" TEXT,
    "databaseUrl" TEXT,
    "isPublic" TEXT,
    "type" TEXT,
    "googleAnalytics" TEXT,
    "searchSetting" TEXT,
    "mailServer" TEXT,
    "youtubeVideos" TEXT,
    "siteTagline" TEXT,
    "googleDrive" TEXT,
    "disqusKey" TEXT,

    CONSTRAINT "shop_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attributes" (
    "id" SERIAL NOT NULL,
    "default_label" TEXT,
    "attribute_code" TEXT,
    "filter_options" TEXT,
    "use_search" TEXT,
    "layered_navigation" BOOLEAN,
    "search_results_layered_navigation" BOOLEAN,
    "position" TEXT,
    "promo_rule_conditions" BOOLEAN,
    "allow_html_tags_storefront" BOOLEAN,
    "visible_catalog_pages_storefront" BOOLEAN,
    "used_product_listing" BOOLEAN,
    "used_sorting_product_listing" BOOLEAN,
    "prod_id" BIGINT NOT NULL,
    "attribute_class" TEXT,
    "attribute_value" TEXT,
    "column_options" TEXT,
    "faceted_navigation" BOOLEAN,
    "isPublic" TEXT,
    "meta_description" TEXT,
    "meta_name" BOOLEAN,
    "meta_url" TEXT,
    "product_attribute_set" TEXT,
    "products" TEXT,

    CONSTRAINT "product_attribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletters" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "customer_first_name" TEXT,
    "customer_last_name" TEXT,
    "store" TEXT,
    "status" TEXT,
    "websites" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "cust_id" INTEGER NOT NULL,
    "customers" TEXT,

    CONSTRAINT "newsletter_subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "website" TEXT,
    "products" TEXT,
    "articles" TEXT,
    "customers" TEXT,
    "comments" TEXT,
    "coupons" TEXT,
    "categories" TEXT,
    "polls" TEXT,
    "quotes" TEXT,
    "reviews" TEXT,
    "gift_certificates" TEXT,
    "rating" TEXT,
    "tags" TEXT,
    "users" TEXT,
    "invoices" TEXT,
    "reports" TEXT,
    "reward_points" TEXT,
    "special_discounts" TEXT,
    "statistics" TEXT,
    "stocks" TEXT,
    "country" TEXT,
    "physical_store" TEXT,
    "type" TEXT,
    "workspaces" TEXT,

    CONSTRAINT "shops_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "apitoken.name_unique" ON "apitoken"("name");

-- CreateIndex
CREATE UNIQUE INDEX "apitoken.token_unique" ON "apitoken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "currency_rates_id_key" ON "currency_rates"("id");

-- CreateIndex
CREATE UNIQUE INDEX "currency_symbols_id_key" ON "currency_symbols"("id");

-- CreateIndex
CREATE UNIQUE INDEX "payments.id_unique" ON "payments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "payments.name_unique" ON "payments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "permissions.id_unique" ON "permissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "products.sku_unique" ON "products"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "providers.id_unique" ON "providers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "providers.name_unique" ON "providers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "segments.id_unique" ON "segments"("id");

-- CreateIndex
CREATE INDEX "themes_website_id_fkey" ON "themes"("website_id");

-- CreateIndex
CREATE UNIQUE INDEX "newsletter_subscribers.email_unique" ON "newsletters"("email");
