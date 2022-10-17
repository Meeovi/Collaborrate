import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class LogInScalarWhereWithAggregatesInput {
    AND?: LogInScalarWhereWithAggregatesInput[] | undefined;
    OR?: LogInScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LogInScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    password?: StringNullableWithAggregatesFilter | undefined;
    token?: StringNullableWithAggregatesFilter | undefined;
    expiresIn?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
}
