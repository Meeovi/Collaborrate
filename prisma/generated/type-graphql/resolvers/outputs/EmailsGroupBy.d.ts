import { EmailsAvgAggregate } from "../outputs/EmailsAvgAggregate";
import { EmailsCountAggregate } from "../outputs/EmailsCountAggregate";
import { EmailsMaxAggregate } from "../outputs/EmailsMaxAggregate";
import { EmailsMinAggregate } from "../outputs/EmailsMinAggregate";
import { EmailsSumAggregate } from "../outputs/EmailsSumAggregate";
export declare class EmailsGroupBy {
    id: number;
    title: Date | null;
    created_at: Date | null;
    subject: string | null;
    content: string | null;
    recipients: string | null;
    cust_id: number;
    _count: EmailsCountAggregate | null;
    _avg: EmailsAvgAggregate | null;
    _sum: EmailsSumAggregate | null;
    _min: EmailsMinAggregate | null;
    _max: EmailsMaxAggregate | null;
}
