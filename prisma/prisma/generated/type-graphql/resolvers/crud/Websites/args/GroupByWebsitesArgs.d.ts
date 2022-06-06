import { WebsitesOrderByWithAggregationInput } from "../../../inputs/WebsitesOrderByWithAggregationInput";
import { WebsitesScalarWhereWithAggregatesInput } from "../../../inputs/WebsitesScalarWhereWithAggregatesInput";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";
export declare class GroupByWebsitesArgs {
    where?: WebsitesWhereInput | undefined;
    orderBy?: WebsitesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "url" | "shop" | "store">;
    having?: WebsitesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
