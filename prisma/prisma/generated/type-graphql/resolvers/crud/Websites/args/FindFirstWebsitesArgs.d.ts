import { WebsitesOrderByWithRelationInput } from "../../../inputs/WebsitesOrderByWithRelationInput";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";
export declare class FindFirstWebsitesArgs {
    where?: WebsitesWhereInput | undefined;
    orderBy?: WebsitesOrderByWithRelationInput[] | undefined;
    cursor?: WebsitesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "url" | "shop" | "store"> | undefined;
}
