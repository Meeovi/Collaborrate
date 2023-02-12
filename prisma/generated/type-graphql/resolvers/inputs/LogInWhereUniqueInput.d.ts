import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LogInWhereInput } from "../inputs/LogInWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LogInWhereUniqueInput {
    id?: bigint | undefined;
    AND?: LogInWhereInput[] | undefined;
    OR?: LogInWhereInput[] | undefined;
    NOT?: LogInWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    token?: StringNullableFilter | undefined;
    expiresIn?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    username?: StringNullableFilter | undefined;
}
