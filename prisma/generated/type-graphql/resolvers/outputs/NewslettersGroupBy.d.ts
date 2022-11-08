import { NewslettersAvgAggregate } from "../outputs/NewslettersAvgAggregate";
import { NewslettersCountAggregate } from "../outputs/NewslettersCountAggregate";
import { NewslettersMaxAggregate } from "../outputs/NewslettersMaxAggregate";
import { NewslettersMinAggregate } from "../outputs/NewslettersMinAggregate";
import { NewslettersSumAggregate } from "../outputs/NewslettersSumAggregate";
export declare class NewslettersGroupBy {
    id: number;
    email: string;
    customer_first_name: string | null;
    customer_last_name: string | null;
    store: string | null;
    status: string | null;
    websites: string | null;
    created_at: Date | null;
    cust_id: number;
    customers: string | null;
    _count: NewslettersCountAggregate | null;
    _avg: NewslettersAvgAggregate | null;
    _sum: NewslettersSumAggregate | null;
    _min: NewslettersMinAggregate | null;
    _max: NewslettersMaxAggregate | null;
}
