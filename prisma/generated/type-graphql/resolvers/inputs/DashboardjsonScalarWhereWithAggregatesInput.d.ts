import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DashboardjsonScalarWhereWithAggregatesInput {
    AND?: DashboardjsonScalarWhereWithAggregatesInput[] | undefined;
    OR?: DashboardjsonScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DashboardjsonScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    definition?: StringNullableWithAggregatesFilter | undefined;
    format?: StringNullableWithAggregatesFilter | undefined;
}
