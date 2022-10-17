import { AnalyticsOrderByWithAggregationInput } from "../../../inputs/AnalyticsOrderByWithAggregationInput";
import { AnalyticsScalarWhereWithAggregatesInput } from "../../../inputs/AnalyticsScalarWhereWithAggregatesInput";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";
export declare class GroupByAnalyticsArgs {
    where?: AnalyticsWhereInput | undefined;
    orderBy?: AnalyticsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "country" | "share_data" | "website_name" | "client_id" | "client_secret" | "tracking_id" | "property_name" | "url" | "default_view" | "category" | "property_hit" | "tracking_code" | "data_collection" | "data_retention" | "search_analytics">;
    having?: AnalyticsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
