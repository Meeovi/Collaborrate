import { ChannelsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ChannelsOrderByWithRelationAndSearchRelevanceInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";
export declare class AggregateChannelsArgs {
    where?: ChannelsWhereInput | undefined;
    orderBy?: ChannelsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ChannelsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
