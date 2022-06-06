import { CollectionsOrderByWithRelationInput } from "../../../inputs/CollectionsOrderByWithRelationInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";
export declare class FindManyCollectionsArgs {
    where?: CollectionsWhereInput | undefined;
    orderBy?: CollectionsOrderByWithRelationInput[] | undefined;
    cursor?: CollectionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "image" | "product" | "meta_title" | "meta_keywords" | "meta_description"> | undefined;
}
