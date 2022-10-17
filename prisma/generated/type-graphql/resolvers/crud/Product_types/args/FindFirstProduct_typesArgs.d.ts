import { Product_typesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_typesOrderByWithRelationAndSearchRelevanceInput";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";
import { Product_typesWhereUniqueInput } from "../../../inputs/Product_typesWhereUniqueInput";
export declare class FindFirstProduct_typesArgs {
    where?: Product_typesWhereInput | undefined;
    orderBy?: Product_typesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Product_typesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type_name" | "taxes" | "isShippable" | "meta_url" | "meta_description" | "filter_options" | "product_type" | "prod_id" | "products"> | undefined;
}
