import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ReturnsScalarWhereWithAggregatesInput {
    AND?: ReturnsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReturnsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReturnsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    validity?: StringNullableWithAggregatesFilter | undefined;
    return_prefix?: StringNullableWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
}
