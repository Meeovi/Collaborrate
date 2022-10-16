import { MessagesAvgAggregate } from "../outputs/MessagesAvgAggregate";
import { MessagesCountAggregate } from "../outputs/MessagesCountAggregate";
import { MessagesMaxAggregate } from "../outputs/MessagesMaxAggregate";
import { MessagesMinAggregate } from "../outputs/MessagesMinAggregate";
import { MessagesSumAggregate } from "../outputs/MessagesSumAggregate";
export declare class MessagesGroupBy {
    id: number;
    from: string | null;
    created_at: Date | null;
    subject: string | null;
    content: string | null;
    sender: string | null;
    cust_id: number;
    media: string | null;
    staff_id: number | null;
    customers: string | null;
    users: string | null;
    _count: MessagesCountAggregate | null;
    _avg: MessagesAvgAggregate | null;
    _sum: MessagesSumAggregate | null;
    _min: MessagesMinAggregate | null;
    _max: MessagesMaxAggregate | null;
}
