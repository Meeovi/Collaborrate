import { TagsOrderByWithRelationInput } from "../../../inputs/TagsOrderByWithRelationInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";
export declare class FindManyTagsArgs {
    where?: TagsWhereInput | undefined;
    orderBy?: TagsOrderByWithRelationInput[] | undefined;
    cursor?: TagsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
