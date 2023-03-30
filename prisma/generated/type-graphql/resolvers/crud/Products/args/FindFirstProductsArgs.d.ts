import { ProductsOrderByWithRelationInput } from "../../../inputs/ProductsOrderByWithRelationInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
export declare class FindFirstProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithRelationInput[] | undefined;
    cursor?: ProductsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "sku" | "thumbnail" | "name" | "price" | "quantity_per_source" | "salable_quantity" | "visibility" | "status" | "websites" | "product" | "tax_class" | "stock_status" | "weight" | "categories" | "created_at" | "country" | "size" | "format" | "height" | "content" | "short_description" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "file" | "manufacture" | "attributes" | "brand" | "contract" | "cost_string" | "customer_type" | "family" | "manufacturer_part_number" | "occassions" | "part_number" | "related_product" | "tags" | "types" | "variants" | "zone" | "brands" | "coupons" | "credit_memos" | "manufacturer" | "mediamanager" | "occassions_occassionsToproducts" | "orders" | "other_products" | "product_attribute" | "product_types" | "products" | "quotes" | "rating" | "returns" | "tax_rate" | "tax_rule" | "trainings" | "workspaces"> | undefined;
}
