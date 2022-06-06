import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class General_settingsScalarWhereWithAggregatesInput {
    AND?: General_settingsScalarWhereWithAggregatesInput[] | undefined;
    OR?: General_settingsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: General_settingsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    title?: StringNullableWithAggregatesFilter | undefined;
    tagline?: StringNullableWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    access_restrictions?: StringNullableWithAggregatesFilter | undefined;
    restriction_mode?: StringNullableWithAggregatesFilter | undefined;
    startup_page?: StringNullableWithAggregatesFilter | undefined;
    landing_page?: StringNullableWithAggregatesFilter | undefined;
    http_response?: StringNullableWithAggregatesFilter | undefined;
    store_email?: StringNullableWithAggregatesFilter | undefined;
    store_contact?: StringNullableWithAggregatesFilter | undefined;
    store_contact_two?: StringNullableWithAggregatesFilter | undefined;
    customer_support?: StringNullableWithAggregatesFilter | undefined;
}
