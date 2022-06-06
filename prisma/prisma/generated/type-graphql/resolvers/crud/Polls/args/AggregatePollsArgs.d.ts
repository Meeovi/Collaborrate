import { PollsOrderByWithRelationInput } from "../../../inputs/PollsOrderByWithRelationInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";
export declare class AggregatePollsArgs {
    where?: PollsWhereInput | undefined;
    orderBy?: PollsOrderByWithRelationInput[] | undefined;
    cursor?: PollsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
