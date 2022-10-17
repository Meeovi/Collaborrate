import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomizationsWhereInput {
    AND?: CustomizationsWhereInput[] | undefined;
    OR?: CustomizationsWhereInput[] | undefined;
    NOT?: CustomizationsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    site_name?: StringNullableFilter | undefined;
    nav_link?: StringNullableFilter | undefined;
    notification?: StringNullableFilter | undefined;
    banner?: StringNullableFilter | undefined;
    footer_link?: StringNullableFilter | undefined;
    announcement?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    site_url?: StringNullableFilter | undefined;
    allow_signup?: StringNullableFilter | undefined;
}
