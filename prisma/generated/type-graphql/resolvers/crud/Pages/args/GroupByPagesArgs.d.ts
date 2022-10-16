import { PagesOrderByWithAggregationInput } from "../../../inputs/PagesOrderByWithAggregationInput";
import { PagesScalarWhereWithAggregatesInput } from "../../../inputs/PagesScalarWhereWithAggregatesInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
export declare class GroupByPagesArgs {
    where?: PagesWhereInput | undefined;
    orderBy?: PagesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "enable_page" | "title" | "content_title" | "content" | "url_key" | "meta_title" | "meta_keywords" | "meta_description">;
    having?: PagesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
