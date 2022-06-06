import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StatisticsScalarWhereWithAggregatesInput {
    AND?: StatisticsScalarWhereWithAggregatesInput[] | undefined;
    OR?: StatisticsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StatisticsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    published?: DateTimeNullableWithAggregatesFilter | undefined;
    special_offers?: StringNullableWithAggregatesFilter | undefined;
    reports?: StringNullableWithAggregatesFilter | undefined;
    rewards?: StringNullableWithAggregatesFilter | undefined;
    coupons?: StringNullableWithAggregatesFilter | undefined;
    expiration?: DateTimeNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    articles?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
}
