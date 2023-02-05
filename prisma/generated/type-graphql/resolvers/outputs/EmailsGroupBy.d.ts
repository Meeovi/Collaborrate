import { EmailsAvgAggregate } from "../outputs/EmailsAvgAggregate";
import { EmailsCountAggregate } from "../outputs/EmailsCountAggregate";
import { EmailsMaxAggregate } from "../outputs/EmailsMaxAggregate";
import { EmailsMinAggregate } from "../outputs/EmailsMinAggregate";
import { EmailsSumAggregate } from "../outputs/EmailsSumAggregate";
export declare class EmailsGroupBy {
    id: number;
    created_at: Date | null;
    subject: string | null;
    content: string | null;
    cust_id: number;
    bcc: string | null;
    cc: string | null;
    from: string | null;
    media: string | null;
    staff_id: number | null;
    customers: string | null;
    users: string | null;
    _count: EmailsCountAggregate | null;
    _avg: EmailsAvgAggregate | null;
    _sum: EmailsSumAggregate | null;
    _min: EmailsMinAggregate | null;
    _max: EmailsMaxAggregate | null;
}
