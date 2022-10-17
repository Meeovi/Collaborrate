import { AnalyticsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AnalyticsOrderByWithRelationAndSearchRelevanceInput";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";
import { AnalyticsWhereUniqueInput } from "../../../inputs/AnalyticsWhereUniqueInput";
export declare class FindFirstAnalyticsArgs {
    where?: AnalyticsWhereInput | undefined;
    orderBy?: AnalyticsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AnalyticsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "country" | "share_data" | "website_name" | "client_id" | "client_secret" | "tracking_id" | "property_name" | "url" | "default_view" | "category" | "property_hit" | "tracking_code" | "data_collection" | "data_retention" | "search_analytics"> | undefined;
}
