import { ChannelsAvgAggregate } from "../outputs/ChannelsAvgAggregate";
import { ChannelsCountAggregate } from "../outputs/ChannelsCountAggregate";
import { ChannelsMaxAggregate } from "../outputs/ChannelsMaxAggregate";
import { ChannelsMinAggregate } from "../outputs/ChannelsMinAggregate";
import { ChannelsSumAggregate } from "../outputs/ChannelsSumAggregate";
export declare class ChannelsGroupBy {
    id: bigint;
    created_at: Date | null;
    code: string | null;
    name: string | null;
    currency: string | null;
    default_lang: string | null;
    include_tax: string | null;
    default_zone: string | null;
    default_shipping: string | null;
    client_id: string | null;
    client_secret: string | null;
    _count: ChannelsCountAggregate | null;
    _avg: ChannelsAvgAggregate | null;
    _sum: ChannelsSumAggregate | null;
    _min: ChannelsMinAggregate | null;
    _max: ChannelsMaxAggregate | null;
}
