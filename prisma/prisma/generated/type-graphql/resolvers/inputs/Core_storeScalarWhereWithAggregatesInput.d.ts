import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Core_storeScalarWhereWithAggregatesInput {
    AND?: Core_storeScalarWhereWithAggregatesInput[] | undefined;
    OR?: Core_storeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Core_storeScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    key?: StringNullableWithAggregatesFilter | undefined;
    value?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    environment?: StringNullableWithAggregatesFilter | undefined;
    tag?: StringNullableWithAggregatesFilter | undefined;
}
