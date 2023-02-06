import { CollectionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CollectionsOrderByWithRelationAndSearchRelevanceInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";
export declare class FindFirstCollectionsArgs {
    where?: CollectionsWhereInput | undefined;
    orderBy?: CollectionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CollectionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "image" | "product" | "meta_title" | "meta_keywords" | "meta_description"> | undefined;
}
