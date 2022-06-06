import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Gift_certificatesWhereInput {
    AND?: Gift_certificatesWhereInput[] | undefined;
    OR?: Gift_certificatesWhereInput[] | undefined;
    NOT?: Gift_certificatesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    discount?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
    special_offers?: StringNullableFilter | undefined;
    rewards?: StringNullableFilter | undefined;
    coupons?: StringNullableFilter | undefined;
    expiration?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
}
