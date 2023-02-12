import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ZonesWhereInput } from "../inputs/ZonesWhereInput";
export declare class ZonesWhereUniqueInput {
    id?: bigint | undefined;
    AND?: ZonesWhereInput[] | undefined;
    OR?: ZonesWhereInput[] | undefined;
    NOT?: ZonesWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
    scope?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
}
