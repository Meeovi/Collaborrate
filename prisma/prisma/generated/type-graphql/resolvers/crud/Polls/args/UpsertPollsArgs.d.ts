import { PollsCreateInput } from "../../../inputs/PollsCreateInput";
import { PollsUpdateInput } from "../../../inputs/PollsUpdateInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";
export declare class UpsertPollsArgs {
    where: PollsWhereUniqueInput;
    create: PollsCreateInput;
    update: PollsUpdateInput;
}
