import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UsersScalarWhereWithAggregatesInput {
    AND?: UsersScalarWhereWithAggregatesInput[] | undefined;
    OR?: UsersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    username?: StringWithAggregatesFilter | undefined;
    first_name?: StringWithAggregatesFilter | undefined;
    last_name?: StringNullableWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    interface_locale?: StringNullableWithAggregatesFilter | undefined;
    value?: StringNullableWithAggregatesFilter | undefined;
    permissions?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
