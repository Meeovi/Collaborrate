import { CategoriesOrderByWithAggregationInput } from "../../../inputs/CategoriesOrderByWithAggregationInput";
import { CategoriesScalarWhereWithAggregatesInput } from "../../../inputs/CategoriesScalarWhereWithAggregatesInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
export declare class GroupByCategoriesArgs {
    where?: CategoriesWhereInput | undefined;
    orderBy?: CategoriesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "thumbnail" | "name" | "visibility" | "status" | "websites" | "product" | "country" | "description" | "content" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "workspaces">;
    having?: CategoriesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
