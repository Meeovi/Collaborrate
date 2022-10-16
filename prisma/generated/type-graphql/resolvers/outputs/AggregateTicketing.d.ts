import { TicketingAvgAggregate } from "../outputs/TicketingAvgAggregate";
import { TicketingCountAggregate } from "../outputs/TicketingCountAggregate";
import { TicketingMaxAggregate } from "../outputs/TicketingMaxAggregate";
import { TicketingMinAggregate } from "../outputs/TicketingMinAggregate";
import { TicketingSumAggregate } from "../outputs/TicketingSumAggregate";
export declare class AggregateTicketing {
    _count: TicketingCountAggregate | null;
    _avg: TicketingAvgAggregate | null;
    _sum: TicketingSumAggregate | null;
    _min: TicketingMinAggregate | null;
    _max: TicketingMaxAggregate | null;
}
