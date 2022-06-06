import { Newsletter_subscribersAvgAggregate } from "../outputs/Newsletter_subscribersAvgAggregate";
import { Newsletter_subscribersCountAggregate } from "../outputs/Newsletter_subscribersCountAggregate";
import { Newsletter_subscribersMaxAggregate } from "../outputs/Newsletter_subscribersMaxAggregate";
import { Newsletter_subscribersMinAggregate } from "../outputs/Newsletter_subscribersMinAggregate";
import { Newsletter_subscribersSumAggregate } from "../outputs/Newsletter_subscribersSumAggregate";
export declare class Newsletter_subscribersGroupBy {
    id: number;
    email: string;
    customer_first_name: string | null;
    customer_last_name: string | null;
    store: string | null;
    status: string | null;
    websites: string | null;
    created_at: Date | null;
    cust_id: number;
    _count: Newsletter_subscribersCountAggregate | null;
    _avg: Newsletter_subscribersAvgAggregate | null;
    _sum: Newsletter_subscribersSumAggregate | null;
    _min: Newsletter_subscribersMinAggregate | null;
    _max: Newsletter_subscribersMaxAggregate | null;
}
