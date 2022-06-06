import { OpportunitiesOrderByWithRelationInput } from "../../../inputs/OpportunitiesOrderByWithRelationInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";
export declare class AggregateOpportunitiesArgs {
    where?: OpportunitiesWhereInput | undefined;
    orderBy?: OpportunitiesOrderByWithRelationInput[] | undefined;
    cursor?: OpportunitiesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
