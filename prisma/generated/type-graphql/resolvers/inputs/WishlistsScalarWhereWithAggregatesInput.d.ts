import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class WishlistsScalarWhereWithAggregatesInput {
    AND?: WishlistsScalarWhereWithAggregatesInput[] | undefined;
    OR?: WishlistsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WishlistsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    visibility?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    quantity?: StringNullableWithAggregatesFilter | undefined;
    occassions?: StringNullableWithAggregatesFilter | undefined;
}
