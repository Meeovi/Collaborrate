import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { RewardsWhereInput } from "../inputs/RewardsWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class RewardsWhereUniqueInput {
    id?: number | undefined;
    AND?: RewardsWhereInput[] | undefined;
    OR?: RewardsWhereInput[] | undefined;
    NOT?: RewardsWhereInput[] | undefined;
    name?: StringFilter | undefined;
    slug?: StringNullableFilter | undefined;
    level?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    coupons?: StringNullableFilter | undefined;
    expiration?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
