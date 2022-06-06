import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Gift_certificatesScalarWhereWithAggregatesInput {
    AND?: Gift_certificatesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Gift_certificatesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Gift_certificatesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    discount?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    published?: DateTimeNullableWithAggregatesFilter | undefined;
    special_offers?: StringNullableWithAggregatesFilter | undefined;
    rewards?: StringNullableWithAggregatesFilter | undefined;
    coupons?: StringNullableWithAggregatesFilter | undefined;
    expiration?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    articles?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
}
