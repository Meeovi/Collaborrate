import { EventsAvgAggregate } from "../outputs/EventsAvgAggregate";
import { EventsCountAggregate } from "../outputs/EventsCountAggregate";
import { EventsMaxAggregate } from "../outputs/EventsMaxAggregate";
import { EventsMinAggregate } from "../outputs/EventsMinAggregate";
import { EventsSumAggregate } from "../outputs/EventsSumAggregate";
export declare class EventsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    content: string | null;
    tickets: string | null;
    image: string | null;
    start: string | null;
    end: string | null;
    category: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postalcode: string | null;
    _count: EventsCountAggregate | null;
    _avg: EventsAvgAggregate | null;
    _sum: EventsSumAggregate | null;
    _min: EventsMinAggregate | null;
    _max: EventsMaxAggregate | null;
}
