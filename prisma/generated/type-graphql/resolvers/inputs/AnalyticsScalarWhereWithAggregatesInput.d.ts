import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class AnalyticsScalarWhereWithAggregatesInput {
    AND?: AnalyticsScalarWhereWithAggregatesInput[] | undefined;
    OR?: AnalyticsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AnalyticsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    share_data?: StringNullableWithAggregatesFilter | undefined;
    website_name?: StringNullableWithAggregatesFilter | undefined;
    client_id?: StringNullableWithAggregatesFilter | undefined;
    client_secret?: StringNullableWithAggregatesFilter | undefined;
    tracking_id?: StringNullableWithAggregatesFilter | undefined;
    property_name?: StringNullableWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    default_view?: StringNullableWithAggregatesFilter | undefined;
    category?: StringNullableWithAggregatesFilter | undefined;
    property_hit?: StringNullableWithAggregatesFilter | undefined;
    tracking_code?: StringNullableWithAggregatesFilter | undefined;
    data_collection?: BoolNullableWithAggregatesFilter | undefined;
    data_retention?: BoolNullableWithAggregatesFilter | undefined;
    search_analytics?: StringNullableWithAggregatesFilter | undefined;
}
