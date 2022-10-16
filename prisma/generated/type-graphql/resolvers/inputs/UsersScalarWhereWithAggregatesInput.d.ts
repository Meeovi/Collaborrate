import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UsersScalarWhereWithAggregatesInput {
    AND?: UsersScalarWhereWithAggregatesInput[] | undefined;
    OR?: UsersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    username?: StringWithAggregatesFilter | undefined;
    first_name?: StringWithAggregatesFilter | undefined;
    last_name?: StringNullableWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    interface_locale?: StringNullableWithAggregatesFilter | undefined;
    value?: StringNullableWithAggregatesFilter | undefined;
    permissions?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    emails?: StringNullableWithAggregatesFilter | undefined;
    mediamanager?: StringNullableWithAggregatesFilter | undefined;
    messages?: StringNullableWithAggregatesFilter | undefined;
    projects?: StringNullableWithAggregatesFilter | undefined;
    workspaces?: StringNullableWithAggregatesFilter | undefined;
}
