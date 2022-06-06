import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CouponsScalarWhereInput {
    AND?: CouponsScalarWhereInput[] | undefined;
    OR?: CouponsScalarWhereInput[] | undefined;
    NOT?: CouponsScalarWhereInput[] | undefined;
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
}
