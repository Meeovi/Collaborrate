import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UsersWhereInput {
    AND?: UsersWhereInput[] | undefined;
    OR?: UsersWhereInput[] | undefined;
    NOT?: UsersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    username?: StringFilter | undefined;
    first_name?: StringFilter | undefined;
    last_name?: StringNullableFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    interface_locale?: StringNullableFilter | undefined;
    value?: StringNullableFilter | undefined;
    permissions?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
}
