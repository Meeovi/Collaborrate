import { InvoicesAvgAggregate } from "../outputs/InvoicesAvgAggregate";
import { InvoicesCountAggregate } from "../outputs/InvoicesCountAggregate";
import { InvoicesMaxAggregate } from "../outputs/InvoicesMaxAggregate";
import { InvoicesMinAggregate } from "../outputs/InvoicesMinAggregate";
import { InvoicesSumAggregate } from "../outputs/InvoicesSumAggregate";
export declare class AggregateInvoices {
    _count: InvoicesCountAggregate | null;
    _avg: InvoicesAvgAggregate | null;
    _sum: InvoicesSumAggregate | null;
    _min: InvoicesMinAggregate | null;
    _max: InvoicesMaxAggregate | null;
}
