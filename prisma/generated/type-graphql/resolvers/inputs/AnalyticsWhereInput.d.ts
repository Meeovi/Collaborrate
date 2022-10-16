import { BigIntFilter } from "../inputs/BigIntFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AnalyticsWhereInput {
    AND?: AnalyticsWhereInput[] | undefined;
    OR?: AnalyticsWhereInput[] | undefined;
    NOT?: AnalyticsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    share_data?: StringNullableFilter | undefined;
    website_name?: StringNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
    tracking_id?: StringNullableFilter | undefined;
    property_name?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    default_view?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
    property_hit?: StringNullableFilter | undefined;
    tracking_code?: StringNullableFilter | undefined;
    data_collection?: BoolNullableFilter | undefined;
    data_retention?: BoolNullableFilter | undefined;
    search_analytics?: StringNullableFilter | undefined;
}
