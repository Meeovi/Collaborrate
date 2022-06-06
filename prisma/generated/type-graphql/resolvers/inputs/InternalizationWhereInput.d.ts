import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InternalizationWhereInput {
    AND?: InternalizationWhereInput[] | undefined;
    OR?: InternalizationWhereInput[] | undefined;
    NOT?: InternalizationWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    default?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
}
