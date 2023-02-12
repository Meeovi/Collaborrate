import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PermissionsWhereInput } from "../inputs/PermissionsWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PermissionsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: PermissionsWhereInput[] | undefined;
    OR?: PermissionsWhereInput[] | undefined;
    NOT?: PermissionsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    create?: StringNullableFilter | undefined;
    delete?: StringNullableFilter | undefined;
    read?: StringNullableFilter | undefined;
    role?: StringNullableFilter | undefined;
    update?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
