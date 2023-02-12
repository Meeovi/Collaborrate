import { CategoriesOrderByWithRelationInput } from "../../../inputs/CategoriesOrderByWithRelationInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";
export declare class FindFirstCategoriesArgs {
    where?: CategoriesWhereInput | undefined;
    orderBy?: CategoriesOrderByWithRelationInput[] | undefined;
    cursor?: CategoriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "thumbnail" | "name" | "visibility" | "status" | "websites" | "product" | "country" | "description" | "content" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "workspaces"> | undefined;
}
