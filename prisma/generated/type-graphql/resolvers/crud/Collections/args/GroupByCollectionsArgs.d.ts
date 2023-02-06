import { CollectionsOrderByWithAggregationInput } from "../../../inputs/CollectionsOrderByWithAggregationInput";
import { CollectionsScalarWhereWithAggregatesInput } from "../../../inputs/CollectionsScalarWhereWithAggregatesInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
export declare class GroupByCollectionsArgs {
    where?: CollectionsWhereInput | undefined;
    orderBy?: CollectionsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "description" | "image" | "product" | "meta_title" | "meta_keywords" | "meta_description">;
    having?: CollectionsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
