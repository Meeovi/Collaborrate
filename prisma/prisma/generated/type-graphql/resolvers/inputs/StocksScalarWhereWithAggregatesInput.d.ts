import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StocksScalarWhereWithAggregatesInput {
    AND?: StocksScalarWhereWithAggregatesInput[] | undefined;
    OR?: StocksScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StocksScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    enabled?: BoolNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    website?: StringNullableWithAggregatesFilter | undefined;
    sources?: StringNullableWithAggregatesFilter | undefined;
}
