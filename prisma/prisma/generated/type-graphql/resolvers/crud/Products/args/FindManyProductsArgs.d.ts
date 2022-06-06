import { ProductsOrderByWithRelationInput } from "../../../inputs/ProductsOrderByWithRelationInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
export declare class FindManyProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithRelationInput[] | undefined;
    cursor?: ProductsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "sku" | "thumbnail" | "name" | "type" | "attribute_set" | "price" | "quantity_per_source" | "salable_quantity" | "visibility" | "status" | "websites" | "product" | "tax_class" | "stock_status" | "weight" | "categories" | "created_at" | "country" | "size" | "format" | "height" | "content" | "short_description" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "file" | "manufacture"> | undefined;
}
