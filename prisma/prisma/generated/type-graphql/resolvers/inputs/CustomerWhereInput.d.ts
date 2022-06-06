import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerWhereInput {
    AND?: CustomerWhereInput[] | undefined;
    OR?: CustomerWhereInput[] | undefined;
    NOT?: CustomerWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    firstname?: StringNullableFilter | undefined;
    lastname?: StringNullableFilter | undefined;
    username?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    postal?: StringNullableFilter | undefined;
    active?: StringNullableFilter | undefined;
}
