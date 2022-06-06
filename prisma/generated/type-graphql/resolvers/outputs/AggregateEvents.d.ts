import { EventsAvgAggregate } from "../outputs/EventsAvgAggregate";
import { EventsCountAggregate } from "../outputs/EventsCountAggregate";
import { EventsMaxAggregate } from "../outputs/EventsMaxAggregate";
import { EventsMinAggregate } from "../outputs/EventsMinAggregate";
import { EventsSumAggregate } from "../outputs/EventsSumAggregate";
export declare class AggregateEvents {
    _count: EventsCountAggregate | null;
    _avg: EventsAvgAggregate | null;
    _sum: EventsSumAggregate | null;
    _min: EventsMinAggregate | null;
    _max: EventsMaxAggregate | null;
}
