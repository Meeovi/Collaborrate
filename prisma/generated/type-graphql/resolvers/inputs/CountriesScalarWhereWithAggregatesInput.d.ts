import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CountriesScalarWhereWithAggregatesInput {
    AND?: CountriesScalarWhereWithAggregatesInput[] | undefined;
    OR?: CountriesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CountriesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    region?: StringNullableWithAggregatesFilter | undefined;
    trainings?: StringNullableWithAggregatesFilter | undefined;
}
