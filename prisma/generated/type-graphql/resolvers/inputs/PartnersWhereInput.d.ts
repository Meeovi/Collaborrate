import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PartnersWhereInput {
    AND?: PartnersWhereInput[] | undefined;
    OR?: PartnersWhereInput[] | undefined;
    NOT?: PartnersWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    isPublic?: StringNullableFilter | undefined;
    business_type?: StringNullableFilter | undefined;
}
