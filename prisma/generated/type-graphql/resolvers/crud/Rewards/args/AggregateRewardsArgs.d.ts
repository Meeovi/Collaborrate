import { RewardsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RewardsOrderByWithRelationAndSearchRelevanceInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";
export declare class AggregateRewardsArgs {
    where?: RewardsWhereInput | undefined;
    orderBy?: RewardsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: RewardsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
