import { ChecklistOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ChecklistOrderByWithRelationAndSearchRelevanceInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";
export declare class AggregateChecklistArgs {
    where?: ChecklistWhereInput | undefined;
    orderBy?: ChecklistOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ChecklistWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
