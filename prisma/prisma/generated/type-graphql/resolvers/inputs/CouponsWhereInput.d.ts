import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CouponsWhereInput {
    AND?: CouponsWhereInput[] | undefined;
    OR?: CouponsWhereInput[] | undefined;
    NOT?: CouponsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    discount?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
    expiration?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    products_couponsToproducts?: ProductsRelationFilter | undefined;
}
