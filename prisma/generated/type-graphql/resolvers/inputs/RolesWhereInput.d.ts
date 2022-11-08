import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class RolesWhereInput {
    AND?: RolesWhereInput[] | undefined;
    OR?: RolesWhereInput[] | undefined;
    NOT?: RolesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    role_name?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
}
