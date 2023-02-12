import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PartnersWhereInput } from "../inputs/PartnersWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PartnersWhereUniqueInput {
    id?: bigint | undefined;
    AND?: PartnersWhereInput[] | undefined;
    OR?: PartnersWhereInput[] | undefined;
    NOT?: PartnersWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    isPublic?: StringNullableFilter | undefined;
    business_type?: StringNullableFilter | undefined;
}
