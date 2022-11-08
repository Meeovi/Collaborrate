import { VisitsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VisitsOrderByWithRelationAndSearchRelevanceInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";
export declare class AggregateVisitsArgs {
    where?: VisitsWhereInput | undefined;
    orderBy?: VisitsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: VisitsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
