import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class CurrenciesScalarWhereWithAggregatesInput {
    AND?: CurrenciesScalarWhereWithAggregatesInput[] | undefined;
    OR?: CurrenciesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CurrenciesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    code?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    region?: StringNullableWithAggregatesFilter | undefined;
    symbol?: StringNullableWithAggregatesFilter | undefined;
    useStandard?: StringNullableWithAggregatesFilter | undefined;
}
