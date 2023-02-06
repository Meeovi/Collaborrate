import { ProductsOrderByWithAggregationInput } from "../../../inputs/ProductsOrderByWithAggregationInput";
import { ProductsScalarWhereWithAggregatesInput } from "../../../inputs/ProductsScalarWhereWithAggregatesInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
export declare class GroupByProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "sku" | "thumbnail" | "name" | "price" | "quantity_per_source" | "salable_quantity" | "visibility" | "status" | "websites" | "product" | "tax_class" | "stock_status" | "weight" | "categories" | "created_at" | "country" | "size" | "format" | "height" | "content" | "short_description" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "file" | "manufacture" | "attributes" | "brand" | "contract" | "cost_string" | "customer_type" | "family" | "manufacturer_part_number" | "occassions" | "part_number" | "related_product" | "tags" | "types" | "variants" | "zone" | "brands" | "coupons" | "credit_memos" | "manufacturer" | "mediamanager" | "occassions_occassionsToproducts" | "orders" | "other_products" | "product_attribute" | "product_types" | "products" | "quotes" | "rating" | "returns" | "tax_rate" | "tax_rule" | "trainings" | "workspaces">;
    having?: ProductsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
