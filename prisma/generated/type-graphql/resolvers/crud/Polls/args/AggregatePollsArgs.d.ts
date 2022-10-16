import { PollsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PollsOrderByWithRelationAndSearchRelevanceInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";
export declare class AggregatePollsArgs {
    where?: PollsWhereInput | undefined;
    orderBy?: PollsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PollsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
