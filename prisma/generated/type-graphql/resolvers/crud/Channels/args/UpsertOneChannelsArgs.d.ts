import { ChannelsCreateInput } from "../../../inputs/ChannelsCreateInput";
import { ChannelsUpdateInput } from "../../../inputs/ChannelsUpdateInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";
export declare class UpsertOneChannelsArgs {
    where: ChannelsWhereUniqueInput;
    create: ChannelsCreateInput;
    update: ChannelsUpdateInput;
}
