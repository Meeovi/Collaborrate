import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DashboardrestapiScalarWhereWithAggregatesInput {
    AND?: DashboardrestapiScalarWhereWithAggregatesInput[] | undefined;
    OR?: DashboardrestapiScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DashboardrestapiScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    headerValue?: StringNullableWithAggregatesFilter | undefined;
    headerKey?: StringNullableWithAggregatesFilter | undefined;
    authenticationType?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
}
