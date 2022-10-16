import { OpportunitiesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OpportunitiesOrderByWithRelationAndSearchRelevanceInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";
export declare class AggregateOpportunitiesArgs {
    where?: OpportunitiesWhereInput | undefined;
    orderBy?: OpportunitiesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: OpportunitiesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
