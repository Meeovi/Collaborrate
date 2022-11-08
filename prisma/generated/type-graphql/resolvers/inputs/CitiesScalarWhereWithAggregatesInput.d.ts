import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CitiesScalarWhereWithAggregatesInput {
    AND?: CitiesScalarWhereWithAggregatesInput[] | undefined;
    OR?: CitiesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CitiesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    postalCode?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
}
