import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class General_settingsWhereInput {
    AND?: General_settingsWhereInput[] | undefined;
    OR?: General_settingsWhereInput[] | undefined;
    NOT?: General_settingsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    title?: StringNullableFilter | undefined;
    tagline?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    access_restrictions?: StringNullableFilter | undefined;
    restriction_mode?: StringNullableFilter | undefined;
    startup_page?: StringNullableFilter | undefined;
    landing_page?: StringNullableFilter | undefined;
    http_response?: StringNullableFilter | undefined;
    store_email?: StringNullableFilter | undefined;
    store_contact?: StringNullableFilter | undefined;
    store_contact_two?: StringNullableFilter | undefined;
    customer_support?: StringNullableFilter | undefined;
}
