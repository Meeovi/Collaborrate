import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Tax_ruleScalarWhereWithAggregatesInput {
    AND?: Tax_ruleScalarWhereWithAggregatesInput[] | undefined;
    OR?: Tax_ruleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Tax_ruleScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    tax_rate?: StringNullableWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
}
