import { LeadsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LeadsOrderByWithRelationAndSearchRelevanceInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";
export declare class AggregateLeadsArgs {
    where?: LeadsWhereInput | undefined;
    orderBy?: LeadsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: LeadsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
