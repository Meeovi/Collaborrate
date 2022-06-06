import { Reward_pointsOrderByWithRelationInput } from "../../../inputs/Reward_pointsOrderByWithRelationInput";
import { Reward_pointsWhereInput } from "../../../inputs/Reward_pointsWhereInput";
import { Reward_pointsWhereUniqueInput } from "../../../inputs/Reward_pointsWhereUniqueInput";
export declare class AggregateReward_pointsArgs {
    where?: Reward_pointsWhereInput | undefined;
    orderBy?: Reward_pointsOrderByWithRelationInput[] | undefined;
    cursor?: Reward_pointsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
