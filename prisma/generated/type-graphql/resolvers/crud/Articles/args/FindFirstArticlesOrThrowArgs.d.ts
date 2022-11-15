import { ArticlesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ArticlesOrderByWithRelationAndSearchRelevanceInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";
export declare class FindFirstArticlesOrThrowArgs {
    where?: ArticlesWhereInput | undefined;
    orderBy?: ArticlesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ArticlesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "content" | "image" | "categories" | "customers" | "users" | "published" | "cust_id" | "isPublic" | "meta_description" | "meta_name" | "meta_url" | "tags" | "type"> | undefined;
}
