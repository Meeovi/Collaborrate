import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { RolesWhereInput } from "../inputs/RolesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class RolesWhereUniqueInput {
    id?: number | undefined;
    AND?: RolesWhereInput[] | undefined;
    OR?: RolesWhereInput[] | undefined;
    NOT?: RolesWhereInput[] | undefined;
    role_name?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    createRole?: StringNullableFilter | undefined;
    updateRole?: StringNullableFilter | undefined;
    deleteRole?: StringNullableFilter | undefined;
    publishRole?: StringNullableFilter | undefined;
    unpublishRole?: StringNullableFilter | undefined;
    role?: StringNullableFilter | undefined;
}
