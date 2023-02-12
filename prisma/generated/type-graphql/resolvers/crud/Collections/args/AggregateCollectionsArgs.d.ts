import { CollectionsOrderByWithRelationInput } from "../../../inputs/CollectionsOrderByWithRelationInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";
export declare class AggregateCollectionsArgs {
    where?: CollectionsWhereInput | undefined;
    orderBy?: CollectionsOrderByWithRelationInput[] | undefined;
    cursor?: CollectionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
