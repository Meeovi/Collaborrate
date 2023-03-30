import { RewardsOrderByWithRelationInput } from "../../../inputs/RewardsOrderByWithRelationInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";
export declare class AggregateRewardsArgs {
    where?: RewardsWhereInput | undefined;
    orderBy?: RewardsOrderByWithRelationInput[] | undefined;
    cursor?: RewardsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
