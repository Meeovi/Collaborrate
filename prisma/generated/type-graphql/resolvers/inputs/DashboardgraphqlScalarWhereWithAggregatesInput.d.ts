import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DashboardgraphqlScalarWhereWithAggregatesInput {
    AND?: DashboardgraphqlScalarWhereWithAggregatesInput[] | undefined;
    OR?: DashboardgraphqlScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DashboardgraphqlScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    headerValue?: StringNullableWithAggregatesFilter | undefined;
    headerKey?: StringNullableWithAggregatesFilter | undefined;
    urlValue?: StringNullableWithAggregatesFilter | undefined;
    urlKey?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
}
