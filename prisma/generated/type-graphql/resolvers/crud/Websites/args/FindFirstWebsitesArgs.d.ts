import { WebsitesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WebsitesOrderByWithRelationAndSearchRelevanceInput";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";
export declare class FindFirstWebsitesArgs {
    where?: WebsitesWhereInput | undefined;
    orderBy?: WebsitesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WebsitesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "url" | "shop" | "store" | "category" | "themes" | "image"> | undefined;
}
