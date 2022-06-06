import { Email_templatesAvgAggregate } from "../outputs/Email_templatesAvgAggregate";
import { Email_templatesCountAggregate } from "../outputs/Email_templatesCountAggregate";
import { Email_templatesMaxAggregate } from "../outputs/Email_templatesMaxAggregate";
import { Email_templatesMinAggregate } from "../outputs/Email_templatesMinAggregate";
import { Email_templatesSumAggregate } from "../outputs/Email_templatesSumAggregate";
export declare class Email_templatesGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    assigned_to: string | null;
    type: string | null;
    active: string | null;
    insert_variable: string | null;
    subject: string | null;
    content: string | null;
    header: string | null;
    footer: string | null;
    width: string | null;
    height: string | null;
    media: string | null;
    _count: Email_templatesCountAggregate | null;
    _avg: Email_templatesAvgAggregate | null;
    _sum: Email_templatesSumAggregate | null;
    _min: Email_templatesMinAggregate | null;
    _max: Email_templatesMaxAggregate | null;
}
