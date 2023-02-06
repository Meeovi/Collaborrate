import { EmailsAvgAggregate } from "../outputs/EmailsAvgAggregate";
import { EmailsCountAggregate } from "../outputs/EmailsCountAggregate";
import { EmailsMaxAggregate } from "../outputs/EmailsMaxAggregate";
import { EmailsMinAggregate } from "../outputs/EmailsMinAggregate";
import { EmailsSumAggregate } from "../outputs/EmailsSumAggregate";
export declare class AggregateEmails {
    _count: EmailsCountAggregate | null;
    _avg: EmailsAvgAggregate | null;
    _sum: EmailsSumAggregate | null;
    _min: EmailsMinAggregate | null;
    _max: EmailsMaxAggregate | null;
}
