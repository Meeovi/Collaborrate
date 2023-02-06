import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ApitokenWhereInput {
    AND?: ApitokenWhereInput[] | undefined;
    OR?: ApitokenWhereInput[] | undefined;
    NOT?: ApitokenWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringFilter | undefined;
    token_type?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    token?: BigIntFilter | undefined;
}
