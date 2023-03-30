import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LogInWhereInput {
    AND?: LogInWhereInput[] | undefined;
    OR?: LogInWhereInput[] | undefined;
    NOT?: LogInWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    token?: StringNullableFilter | undefined;
    expiresIn?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    username?: StringNullableFilter | undefined;
}
