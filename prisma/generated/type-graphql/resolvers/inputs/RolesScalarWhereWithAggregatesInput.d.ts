import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RolesScalarWhereWithAggregatesInput {
    AND?: RolesScalarWhereWithAggregatesInput[] | undefined;
    OR?: RolesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RolesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    role_name?: StringWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    createRole?: StringNullableWithAggregatesFilter | undefined;
    updateRole?: StringNullableWithAggregatesFilter | undefined;
    deleteRole?: StringNullableWithAggregatesFilter | undefined;
    publishRole?: StringNullableWithAggregatesFilter | undefined;
    unpublishRole?: StringNullableWithAggregatesFilter | undefined;
    role?: StringNullableWithAggregatesFilter | undefined;
}
