import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Currency_symbolsScalarWhereWithAggregatesInput {
    AND?: Currency_symbolsScalarWhereWithAggregatesInput[] | undefined;
    OR?: Currency_symbolsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Currency_symbolsScalarWhereWithAggregatesInput[] | undefined;
    symbol?: StringWithAggregatesFilter | undefined;
    use_standard?: BoolNullableWithAggregatesFilter | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
}
