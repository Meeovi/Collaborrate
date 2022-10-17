import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Tax_categoryScalarWhereWithAggregatesInput {
    AND?: Tax_categoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: Tax_categoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Tax_categoryScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    default?: StringNullableWithAggregatesFilter | undefined;
}
