import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { InternalizationWhereInput } from "../inputs/InternalizationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InternalizationWhereUniqueInput {
    id?: bigint | undefined;
    AND?: InternalizationWhereInput[] | undefined;
    OR?: InternalizationWhereInput[] | undefined;
    NOT?: InternalizationWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    default?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
}
