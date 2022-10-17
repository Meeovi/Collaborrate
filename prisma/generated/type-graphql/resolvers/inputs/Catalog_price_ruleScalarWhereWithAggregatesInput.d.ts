import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Catalog_price_ruleScalarWhereWithAggregatesInput {
    AND?: Catalog_price_ruleScalarWhereWithAggregatesInput[] | undefined;
    OR?: Catalog_price_ruleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Catalog_price_ruleScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    rule?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    active?: BoolNullableWithAggregatesFilter | undefined;
    customer_groups?: StringNullableWithAggregatesFilter | undefined;
    priority?: StringNullableWithAggregatesFilter | undefined;
    start_date?: DateTimeNullableWithAggregatesFilter | undefined;
    end_date?: DateTimeNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    website?: StringNullableWithAggregatesFilter | undefined;
    actions_apply?: StringNullableWithAggregatesFilter | undefined;
    actions_discount_amount?: DecimalNullableWithAggregatesFilter | undefined;
    actions_discard_subsequent_rules?: BoolNullableWithAggregatesFilter | undefined;
}
