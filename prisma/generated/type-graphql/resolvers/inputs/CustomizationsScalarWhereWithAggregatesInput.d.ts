import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class CustomizationsScalarWhereWithAggregatesInput {
    AND?: CustomizationsScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomizationsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomizationsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    site_name?: StringNullableWithAggregatesFilter | undefined;
    nav_link?: StringNullableWithAggregatesFilter | undefined;
    notification?: StringNullableWithAggregatesFilter | undefined;
    banner?: StringNullableWithAggregatesFilter | undefined;
    footer_link?: StringNullableWithAggregatesFilter | undefined;
    announcement?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    site_url?: StringNullableWithAggregatesFilter | undefined;
    allow_signup?: StringNullableWithAggregatesFilter | undefined;
}
