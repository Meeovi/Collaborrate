import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StatesScalarWhereWithAggregatesInput {
    AND?: StatesScalarWhereWithAggregatesInput[] | undefined;
    OR?: StatesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StatesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    trainings?: StringNullableWithAggregatesFilter | undefined;
}
