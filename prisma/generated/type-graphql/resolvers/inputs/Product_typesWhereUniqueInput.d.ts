import { BigIntFilter } from "../inputs/BigIntFilter";
import { Product_typesWhereInput } from "../inputs/Product_typesWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Product_typesWhereUniqueInput {
    id?: number | undefined;
    AND?: Product_typesWhereInput[] | undefined;
    OR?: Product_typesWhereInput[] | undefined;
    NOT?: Product_typesWhereInput[] | undefined;
    type_name?: StringNullableFilter | undefined;
    taxes?: StringNullableFilter | undefined;
    isShippable?: StringNullableFilter | undefined;
    meta_url?: StringNullableFilter | undefined;
    meta_description?: StringNullableFilter | undefined;
    filter_options?: StringNullableFilter | undefined;
    product_type?: StringNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    products?: StringNullableFilter | undefined;
}
