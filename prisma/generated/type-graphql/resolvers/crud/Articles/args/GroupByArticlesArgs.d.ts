import { ArticlesOrderByWithAggregationInput } from "../../../inputs/ArticlesOrderByWithAggregationInput";
import { ArticlesScalarWhereWithAggregatesInput } from "../../../inputs/ArticlesScalarWhereWithAggregatesInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
export declare class GroupByArticlesArgs {
    where?: ArticlesWhereInput | undefined;
    orderBy?: ArticlesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "content" | "image" | "categories" | "customers" | "users" | "published" | "cust_id" | "isPublic" | "meta_description" | "meta_name" | "meta_url" | "tags" | "type">;
    having?: ArticlesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
