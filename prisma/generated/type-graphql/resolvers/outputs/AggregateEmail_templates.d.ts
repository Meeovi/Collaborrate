import { Email_templatesAvgAggregate } from "../outputs/Email_templatesAvgAggregate";
import { Email_templatesCountAggregate } from "../outputs/Email_templatesCountAggregate";
import { Email_templatesMaxAggregate } from "../outputs/Email_templatesMaxAggregate";
import { Email_templatesMinAggregate } from "../outputs/Email_templatesMinAggregate";
import { Email_templatesSumAggregate } from "../outputs/Email_templatesSumAggregate";
export declare class AggregateEmail_templates {
    _count: Email_templatesCountAggregate | null;
    _avg: Email_templatesAvgAggregate | null;
    _sum: Email_templatesSumAggregate | null;
    _min: Email_templatesMinAggregate | null;
    _max: Email_templatesMaxAggregate | null;
}
