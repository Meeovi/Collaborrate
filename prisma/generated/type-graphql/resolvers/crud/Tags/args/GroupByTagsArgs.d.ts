import { TagsOrderByWithAggregationInput } from "../../../inputs/TagsOrderByWithAggregationInput";
import { TagsScalarWhereWithAggregatesInput } from "../../../inputs/TagsScalarWhereWithAggregatesInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";
export declare class GroupByTagsArgs {
    where?: TagsWhereInput | undefined;
    orderBy?: TagsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "categories" | "articles" | "products" | "customers" | "users">;
    having?: TagsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
