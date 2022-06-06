import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Currency_ratesScalarWhereWithAggregatesInput {
    AND?: Currency_ratesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Currency_ratesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Currency_ratesScalarWhereWithAggregatesInput[] | undefined;
    import_service?: StringWithAggregatesFilter | undefined;
    usd?: DecimalNullableWithAggregatesFilter | undefined;
}
