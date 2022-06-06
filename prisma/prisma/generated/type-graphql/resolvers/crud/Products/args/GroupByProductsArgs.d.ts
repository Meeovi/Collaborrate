import { ProductsOrderByWithAggregationInput } from "../../../inputs/ProductsOrderByWithAggregationInput";
import { ProductsScalarWhereWithAggregatesInput } from "../../../inputs/ProductsScalarWhereWithAggregatesInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
export declare class GroupByProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "sku" | "thumbnail" | "name" | "type" | "attribute_set" | "price" | "quantity_per_source" | "salable_quantity" | "visibility" | "status" | "websites" | "product" | "tax_class" | "stock_status" | "weight" | "categories" | "created_at" | "country" | "size" | "format" | "height" | "content" | "short_description" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "file" | "manufacture">;
    having?: ProductsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
