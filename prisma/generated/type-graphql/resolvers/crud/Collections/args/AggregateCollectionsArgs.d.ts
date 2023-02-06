import { CollectionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CollectionsOrderByWithRelationAndSearchRelevanceInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";
export declare class AggregateCollectionsArgs {
    where?: CollectionsWhereInput | undefined;
    orderBy?: CollectionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CollectionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
