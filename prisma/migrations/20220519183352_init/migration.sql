-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "categories" TEXT,
    "customers" TEXT,
    "users" TEXT,
    "published" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "cust_id" SERIAL NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_price_rules" (
    "id" SERIAL NOT NULL,
    "rule" VARCHAR(255),
    "description" VARCHAR(255),
    "active" BOOLEAN,
    "coupon" TEXT,
    "uses_per_customer" TEXT,
    "priority" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "status" TEXT,
    "website" TEXT,
    "actions_apply" TEXT,
    "actions_discount_amount" DECIMAL,
    "actions_discard_subsequent_rules" BOOLEAN,
    "actions_max_qty_discount_is_applied_to" DECIMAL,
    "actions_discount_qty_step" DECIMAL,
    "actions_apply_shipping_amount" BOOLEAN,

    CONSTRAINT "cart_price_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog_price_rule" (
    "id" SERIAL NOT NULL,
    "rule" VARCHAR(255),
    "description" VARCHAR(255),
    "active" BOOLEAN,
    "customer_groups" TEXT,
    "priority" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "status" TEXT,
    "website" TEXT,
    "actions_apply" TEXT,
    "actions_discount_amount" DECIMAL,
    "actions_discard_subsequent_rules" BOOLEAN,

    CONSTRAINT "catalog_price_rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "name" VARCHAR(255) NOT NULL,
    "visibility" TEXT,
    "status" BOOLEAN,
    "websites" TEXT,
    "product" TEXT,
    "country" TEXT,
    "description" VARCHAR,
    "content" VARCHAR(255),
    "image" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,
    "meta_url" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "state" VARCHAR,
    "country" VARCHAR,
    "postalCode" TEXT,
    "image" TEXT,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "customer_name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "image" TEXT,
    "response" TEXT,
    "published" TIMESTAMP(6),
    "cust_id" SERIAL NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core_store" (
    "id" SERIAL NOT NULL,
    "key" VARCHAR(255),
    "value" TEXT,
    "type" VARCHAR(255),
    "environment" VARCHAR(255),
    "tag" VARCHAR(255),

    CONSTRAINT "core_store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "region" TEXT,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupons" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "discount" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "expiration" TEXT,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "coupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_memos" (
    "credit_memo" TEXT NOT NULL,
    "order_number" SERIAL NOT NULL,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "bill_to_name" TEXT NOT NULL,
    "status" TEXT,
    "refunded" TEXT,
    "action" TEXT,
    "id" BIGSERIAL NOT NULL,
    "cust_id" SERIAL NOT NULL,
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "credit_memos_pkey" PRIMARY KEY ("credit_memo","id")
);

-- CreateTable
CREATE TABLE "currency_rates" (
    "import_service" TEXT NOT NULL,
    "usd" MONEY,

    CONSTRAINT "currency_rates_pkey" PRIMARY KEY ("import_service")
);

-- CreateTable
CREATE TABLE "currency_symbols" (
    "symbol" TEXT NOT NULL,
    "use_standard" BOOLEAN,

    CONSTRAINT "currency_symbols_pkey" PRIMARY KEY ("symbol")
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
    "customer_since" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gift_certificates" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "excerpt" TEXT,
    "discount" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
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
    "name" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(6),

    CONSTRAINT "glossary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "invoice" SERIAL NOT NULL,
    "order_number" BIGSERIAL NOT NULL,
    "invoice_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "newsletter_subscribers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "customer_first_name" TEXT,
    "customer_last_name" TEXT,
    "store" TEXT,
    "status" TEXT,
    "websites" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "cust_id" SERIAL NOT NULL,

    CONSTRAINT "newsletter_subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "purchase_point" INTEGER,
    "purchase_date" TIMESTAMP(6),
    "bill_to_name" VARCHAR(255) NOT NULL,
    "ship_to_name" VARCHAR(255),
    "grand_total_base" INTEGER,
    "grand_total_purchased" INTEGER,
    "status" BOOLEAN,
    "action" BOOLEAN,
    "allocated_sources" TEXT,
    "braintree_transaction_source" TEXT,
    "cust_id" SERIAL NOT NULL,
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" SERIAL NOT NULL,
    "enable_page" BOOLEAN,
    "title" VARCHAR(255) NOT NULL,
    "content_title" VARCHAR(255),
    "content" TEXT,
    "url_key" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "polls" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "description" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "question" VARCHAR(255),
    "response" VARCHAR(255),
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "polls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_attribute" (
    "id" SERIAL NOT NULL,
    "default_label" TEXT,
    "catalog_input_type_store_owner" TEXT,
    "values_required" BOOLEAN,
    "attribute_code" TEXT,
    "scope" TEXT,
    "default_value" TEXT,
    "unique_value" BOOLEAN,
    "input_validation_store_owner" TEXT,
    "add_column_options" BOOLEAN,
    "filter_options" BOOLEAN,
    "use_search" BOOLEAN,
    "comparable_storefront" BOOLEAN,
    "layered_navigation" BOOLEAN,
    "search_results_layered_navigation" BOOLEAN,
    "position" TEXT,
    "promo_rule_conditions" BOOLEAN,
    "allow_html_tags_storefront" BOOLEAN,
    "visible_catalog_pages_storefront" BOOLEAN,
    "used_product_listing" BOOLEAN,
    "used_sorting_product_listing" BOOLEAN,
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "product_attribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_attribute_set" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "based_on" TEXT,
    "attribute_id" SERIAL NOT NULL,

    CONSTRAINT "product_attribute_set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" BIGSERIAL NOT NULL,
    "sku" BIGSERIAL NOT NULL,
    "thumbnail" TEXT,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "attribute_set" TEXT,
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
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grand_total" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "categories" TEXT,
    "valid_until" TEXT,
    "quote_stage" TEXT,
    "customers" TEXT,
    "cust_id" SERIAL NOT NULL,
    "prod_id" BIGSERIAL NOT NULL,
    "order_id" SERIAL NOT NULL,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "default_value" TEXT,
    "default_store_view" TEXT,
    "rating_visibility" TEXT,
    "active" BOOLEAN,
    "sort_order" DECIMAL,
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "customer" TEXT,
    "email" TEXT,
    "products" TEXT,
    "quantity" DECIMAL,
    "subtotal" TEXT,
    "applied_coupon" TEXT,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "content" TEXT,
    "websites" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "shop_id" SERIAL NOT NULL,
    "comment_id" SERIAL NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reward_points" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "discount" MONEY,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "reward_points_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "role_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipments" (
    "product" TEXT NOT NULL,
    "speed_grade" TEXT NOT NULL,
    "ship_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "carrier_name" TEXT NOT NULL,
    "transit_time" TEXT,
    "tracking_url" TEXT,
    "image" TEXT,
    "id" BIGSERIAL NOT NULL,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shops" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "website" VARCHAR(255),
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

    CONSTRAINT "shops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "source" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" SERIAL NOT NULL,
    "enabled" BOOLEAN,
    "description" VARCHAR(255),
    "latitude" TEXT,
    "longitude" TEXT,
    "pickup_location" BOOLEAN,
    "contact_name" VARCHAR(255),
    "email" VARCHAR(255),
    "phone" DECIMAL,
    "fax" DECIMAL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "street" TEXT,
    "postcode" DECIMAL,

    CONSTRAINT "source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "special_discounts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "discount" MONEY,
    "image" TEXT,
    "published" TIMESTAMP(6),
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
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "country" TEXT,
    "image" TEXT,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistics" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "description" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(6),
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
    "name" VARCHAR(255) NOT NULL,
    "enabled" BOOLEAN,
    "description" VARCHAR(255),
    "website" TEXT,
    "sources" TEXT,

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
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
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "tax_rate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_rule" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "tax_rate" TEXT,
    "prod_id" BIGSERIAL NOT NULL,

    CONSTRAINT "tax_rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "themes" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "parent_theme" TEXT,
    "theme_path" TEXT,
    "action" TEXT,
    "website_id" BIGSERIAL NOT NULL,

    CONSTRAINT "themes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "order_id" SERIAL NOT NULL,
    "transaction_id" SERIAL NOT NULL,
    "parent_transaction_id" SERIAL NOT NULL,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "payment_method" BIGSERIAL NOT NULL,
    "closed" TEXT,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "upload_file" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "alternativeText" VARCHAR(255),
    "caption" VARCHAR(255),
    "width" INTEGER,
    "height" INTEGER,
    "formats" JSONB,
    "hash" VARCHAR(255) NOT NULL,
    "ext" VARCHAR(255),
    "mime" VARCHAR(255) NOT NULL,
    "size" DECIMAL(10,2) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "previewUrl" VARCHAR(255),
    "provider" VARCHAR(255) NOT NULL,
    "provider_metadata" JSONB,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "upload_file_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "upload_file_morph" (
    "id" SERIAL NOT NULL,
    "upload_file_id" INTEGER,
    "related_id" INTEGER,
    "related_type" TEXT,
    "field" TEXT,
    "order" INTEGER,

    CONSTRAINT "upload_file_morph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "url_rewrites" (
    "id" SERIAL NOT NULL,
    "request_path" TEXT,
    "description" VARCHAR(255),
    "redirect_type" BOOLEAN,
    "target_path" TEXT,
    "store" TEXT,

    CONSTRAINT "url_rewrites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "interface_locale" TEXT,
    "value" TEXT,
    "permissions" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agreements" (
    "id" SERIAL NOT NULL,
    "reference_id" SERIAL NOT NULL,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "name" TEXT,
    "image" TEXT,
    "excerpt" TEXT,
    "type" TEXT,
    "user_id" SERIAL NOT NULL,
    "shop_id" SERIAL NOT NULL,

    CONSTRAINT "agreements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collections" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "customer_group" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "tax_class" TEXT,
    "cust_id" SERIAL NOT NULL,

    CONSTRAINT "customer_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails" (
    "id" SERIAL NOT NULL,
    "title" DATE,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "subject" VARCHAR(255),
    "content" TEXT,
    "recipients" TEXT,
    "cust_id" SERIAL NOT NULL,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "returns" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "validity" TEXT,
    "return_prefix" TEXT,
    "prod_id" BIGSERIAL NOT NULL,
    "cust_id" SERIAL NOT NULL,

    CONSTRAINT "returns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "segments" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "description" TEXT,
    "website" TEXT,
    "status" TEXT,
    "apply_to" TEXT,
    "customers" TEXT,

    CONSTRAINT "segments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "websites" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "url" TEXT,
    "shop" TEXT,
    "store" TEXT,

    CONSTRAINT "websites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_payment" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "cust_id" SERIAL NOT NULL,
    "payment_info" TEXT,
    "provider" TEXT,
    "account_no" BIGSERIAL NOT NULL,
    "expiry" BIGINT,

    CONSTRAINT "customer_payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "general_settings" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "tagline" TEXT,
    "url" TEXT,
    "email" TEXT,
    "access_restrictions" TEXT,
    "restriction_mode" TEXT,
    "startup_page" TEXT,
    "landing_page" TEXT,
    "http_response" TEXT,
    "store_email" TEXT,
    "store_contact" TEXT,
    "store_contact_two" TEXT,
    "customer_support" TEXT,

    CONSTRAINT "general_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_settings" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "sales_email" TEXT,
    "hide_customer_ip" TEXT,
    "checkout_subtotal" TEXT,
    "checkout_discount" TEXT,
    "checkout_shipping" TEXT,
    "checkout_tax" TEXT,
    "checkout_fixed_product_tax" TEXT,
    "checkout_grand_total" TEXT,
    "checkout_gift_cards" TEXT,
    "checkout_store_credit" TEXT,
    "allow_reorder" TEXT,
    "allow_zero_grandtotal" TEXT,
    "invoice_logo" TEXT,
    "invoice_html_print" TEXT,
    "invoice_address" TEXT,

    CONSTRAINT "sales_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_settings" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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

    CONSTRAINT "shop_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fullfillments" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "customer" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "firstname" TEXT,
    "lastname" TEXT,
    "username" TEXT,
    "email" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postal" TEXT,
    "active" TEXT,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "content" TEXT,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warehouse" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "description" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postal" TEXT,
    "status" TEXT,
    "image" TEXT,
    "public" TEXT,
    "products" TEXT,
    "category" TEXT,

    CONSTRAINT "warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apitoken" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "token_type" TEXT,
    "description" TEXT,
    "token" BIGINT NOT NULL,

    CONSTRAINT "apitoken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cases" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
    "date_modified" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cases_pkey" PRIMARY KEY ("id")
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
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internalization" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "region" TEXT,
    "description" TEXT,
    "default" TEXT,
    "website" TEXT,

    CONSTRAINT "internalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "opportunities" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "providers" (
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

    CONSTRAINT "providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surveys" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "targets" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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
CREATE TABLE "tasks" (
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

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhooks" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
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

-- CreateIndex
CREATE UNIQUE INDEX "newsletter_subscribers_email_key" ON "newsletter_subscribers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "segments_id_key" ON "segments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "customer_payment_cust_id_key" ON "customer_payment"("cust_id");

-- CreateIndex
CREATE UNIQUE INDEX "customer_payment_account_no_key" ON "customer_payment"("account_no");

-- CreateIndex
CREATE UNIQUE INDEX "customer_id_key" ON "customer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_id_key" ON "permissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "warehouse_id_key" ON "warehouse"("id");

-- CreateIndex
CREATE UNIQUE INDEX "apitoken_name_key" ON "apitoken"("name");

-- CreateIndex
CREATE UNIQUE INDEX "apitoken_token_key" ON "apitoken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "providers_id_key" ON "providers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "providers_name_key" ON "providers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "webhooks_name_key" ON "webhooks"("name");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupons" ADD CONSTRAINT "coupons_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_memos" ADD CONSTRAINT "credit_memos_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_memos" ADD CONSTRAINT "credit_memos_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsletter_subscribers" ADD CONSTRAINT "newsletter_subscribers_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_attribute" ADD CONSTRAINT "product_attribute_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_attribute_set" ADD CONSTRAINT "product_attribute_set_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "product_attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax_rate" ADD CONSTRAINT "tax_rate_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax_rule" ADD CONSTRAINT "tax_rule_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "themes" ADD CONSTRAINT "themes_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "websites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_payment_method_fkey" FOREIGN KEY ("payment_method") REFERENCES "customer_payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_group" ADD CONSTRAINT "customer_group_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "returns" ADD CONSTRAINT "returns_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "returns" ADD CONSTRAINT "returns_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_payment" ADD CONSTRAINT "customer_payment_cust_id_fkey" FOREIGN KEY ("cust_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
