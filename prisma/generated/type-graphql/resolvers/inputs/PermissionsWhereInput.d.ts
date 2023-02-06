import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PermissionsWhereInput {
    AND?: PermissionsWhereInput[] | undefined;
    OR?: PermissionsWhereInput[] | undefined;
    NOT?: PermissionsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
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
