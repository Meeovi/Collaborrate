import { ChannelsOrderByWithRelationInput } from "../../../inputs/ChannelsOrderByWithRelationInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";
export declare class AggregateChannelsArgs {
    where?: ChannelsWhereInput | undefined;
    orderBy?: ChannelsOrderByWithRelationInput[] | undefined;
    cursor?: ChannelsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
