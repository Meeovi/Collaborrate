import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FullfillmentsWhereInput } from "../inputs/FullfillmentsWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class FullfillmentsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: FullfillmentsWhereInput[] | undefined;
    OR?: FullfillmentsWhereInput[] | undefined;
    NOT?: FullfillmentsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    shipping_zones?: StringNullableFilter | undefined;
    company?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    address_two?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    zipcode?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    country_area?: StringNullableFilter | undefined;
    phone?: StringNullableFilter | undefined;
    pickup?: StringNullableFilter | undefined;
    stock?: StringNullableFilter | undefined;
}
