import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Reward_pointsScalarWhereWithAggregatesInput {
    AND?: Reward_pointsScalarWhereWithAggregatesInput[] | undefined;
    OR?: Reward_pointsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Reward_pointsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    discount?: DecimalNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    published?: DateTimeNullableWithAggregatesFilter | undefined;
    coupons?: StringNullableWithAggregatesFilter | undefined;
    expiration?: DateTimeNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    articles?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
}
