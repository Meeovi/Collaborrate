import { General_settingsOrderByWithAggregationInput } from "../../../inputs/General_settingsOrderByWithAggregationInput";
import { General_settingsScalarWhereWithAggregatesInput } from "../../../inputs/General_settingsScalarWhereWithAggregatesInput";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";
export declare class GroupByGeneral_settingsArgs {
    where?: General_settingsWhereInput | undefined;
    orderBy?: General_settingsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "title" | "tagline" | "url" | "email" | "access_restrictions" | "restriction_mode" | "startup_page" | "landing_page" | "http_response" | "store_email" | "store_contact" | "store_contact_two" | "customer_support">;
    having?: General_settingsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
