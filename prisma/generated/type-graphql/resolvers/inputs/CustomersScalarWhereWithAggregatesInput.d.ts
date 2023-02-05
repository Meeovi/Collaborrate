import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomersScalarWhereWithAggregatesInput {
    AND?: CustomersScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    thumbnail?: StringNullableWithAggregatesFilter | undefined;
    name_prefix?: StringNullableWithAggregatesFilter | undefined;
    first_name?: StringWithAggregatesFilter | undefined;
    middle_name?: StringNullableWithAggregatesFilter | undefined;
    last_name?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    customer_group?: StringNullableWithAggregatesFilter | undefined;
    phone?: StringNullableWithAggregatesFilter | undefined;
    zipcode?: StringNullableWithAggregatesFilter | undefined;
    name_suffix?: StringNullableWithAggregatesFilter | undefined;
    websites?: StringNullableWithAggregatesFilter | undefined;
    product?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    customer_since?: DateTimeNullableWithAggregatesFilter | undefined;
    confirmed_email?: StringNullableWithAggregatesFilter | undefined;
    date_of_birth?: StringNullableWithAggregatesFilter | undefined;
    tax_vat_number?: StringNullableWithAggregatesFilter | undefined;
    gender?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    short_description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    Address?: StringNullableWithAggregatesFilter | undefined;
    address_two?: StringNullableWithAggregatesFilter | undefined;
    payment_type?: StringNullableWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    password?: StringNullableWithAggregatesFilter | undefined;
    comments?: StringNullableWithAggregatesFilter | undefined;
    credit_memos?: StringNullableWithAggregatesFilter | undefined;
    customer_payment?: StringNullableWithAggregatesFilter | undefined;
    emails?: StringNullableWithAggregatesFilter | undefined;
    mediamanager?: StringNullableWithAggregatesFilter | undefined;
    messages?: StringNullableWithAggregatesFilter | undefined;
    newsletter_subscribers?: StringNullableWithAggregatesFilter | undefined;
    orders?: StringNullableWithAggregatesFilter | undefined;
    projects?: StringNullableWithAggregatesFilter | undefined;
    quotes?: StringNullableWithAggregatesFilter | undefined;
    returns?: StringNullableWithAggregatesFilter | undefined;
    workspaces?: StringNullableWithAggregatesFilter | undefined;
}
