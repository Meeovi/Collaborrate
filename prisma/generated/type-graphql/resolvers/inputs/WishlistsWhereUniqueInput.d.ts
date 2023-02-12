import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WishlistsWhereInput } from "../inputs/WishlistsWhereInput";
export declare class WishlistsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: WishlistsWhereInput[] | undefined;
    OR?: WishlistsWhereInput[] | undefined;
    NOT?: WishlistsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    visibility?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    quantity?: StringNullableFilter | undefined;
    occassions?: StringNullableFilter | undefined;
}
