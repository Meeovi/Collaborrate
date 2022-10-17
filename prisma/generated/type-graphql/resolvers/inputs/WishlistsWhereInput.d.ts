import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class WishlistsWhereInput {
    AND?: WishlistsWhereInput[] | undefined;
    OR?: WishlistsWhereInput[] | undefined;
    NOT?: WishlistsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    visibility?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    quantity?: StringNullableFilter | undefined;
    occassions?: StringNullableFilter | undefined;
}
