import { PagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PagesOrderByWithRelationAndSearchRelevanceInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";
export declare class FindFirstPagesArgs {
    where?: PagesWhereInput | undefined;
    orderBy?: PagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PagesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "enable_page" | "title" | "content_title" | "content" | "url_key" | "meta_title" | "meta_keywords" | "meta_description"> | undefined;
}
