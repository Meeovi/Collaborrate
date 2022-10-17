import { MessagesAvgAggregate } from "../outputs/MessagesAvgAggregate";
import { MessagesCountAggregate } from "../outputs/MessagesCountAggregate";
import { MessagesMaxAggregate } from "../outputs/MessagesMaxAggregate";
import { MessagesMinAggregate } from "../outputs/MessagesMinAggregate";
import { MessagesSumAggregate } from "../outputs/MessagesSumAggregate";
export declare class AggregateMessages {
    _count: MessagesCountAggregate | null;
    _avg: MessagesAvgAggregate | null;
    _sum: MessagesSumAggregate | null;
    _min: MessagesMinAggregate | null;
    _max: MessagesMaxAggregate | null;
}
