import { ChannelsAvgAggregate } from "../outputs/ChannelsAvgAggregate";
import { ChannelsCountAggregate } from "../outputs/ChannelsCountAggregate";
import { ChannelsMaxAggregate } from "../outputs/ChannelsMaxAggregate";
import { ChannelsMinAggregate } from "../outputs/ChannelsMinAggregate";
import { ChannelsSumAggregate } from "../outputs/ChannelsSumAggregate";
export declare class AggregateChannels {
    _count: ChannelsCountAggregate | null;
    _avg: ChannelsAvgAggregate | null;
    _sum: ChannelsSumAggregate | null;
    _min: ChannelsMinAggregate | null;
    _max: ChannelsMaxAggregate | null;
}
