import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class StatisticsWhereInput {
    AND?: StatisticsWhereInput[] | undefined;
    OR?: StatisticsWhereInput[] | undefined;
    NOT?: StatisticsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
    special_offers?: StringNullableFilter | undefined;
    reports?: StringNullableFilter | undefined;
    rewards?: StringNullableFilter | undefined;
    coupons?: StringNullableFilter | undefined;
    expiration?: DateTimeNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
