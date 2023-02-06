import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ZonesWhereInput {
    AND?: ZonesWhereInput[] | undefined;
    OR?: ZonesWhereInput[] | undefined;
    NOT?: ZonesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    scope?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
}
