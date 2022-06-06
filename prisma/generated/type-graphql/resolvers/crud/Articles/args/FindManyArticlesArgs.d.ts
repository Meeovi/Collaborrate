import { ArticlesOrderByWithRelationInput } from "../../../inputs/ArticlesOrderByWithRelationInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";
export declare class FindManyArticlesArgs {
    where?: ArticlesWhereInput | undefined;
    orderBy?: ArticlesOrderByWithRelationInput[] | undefined;
    cursor?: ArticlesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "content" | "image" | "categories" | "customers" | "users" | "published" | "cust_id"> | undefined;
}
