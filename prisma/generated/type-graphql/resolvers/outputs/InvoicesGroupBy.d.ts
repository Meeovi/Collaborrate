import { InvoicesAvgAggregate } from "../outputs/InvoicesAvgAggregate";
import { InvoicesCountAggregate } from "../outputs/InvoicesCountAggregate";
import { InvoicesMaxAggregate } from "../outputs/InvoicesMaxAggregate";
import { InvoicesMinAggregate } from "../outputs/InvoicesMinAggregate";
import { InvoicesSumAggregate } from "../outputs/InvoicesSumAggregate";
export declare class InvoicesGroupBy {
    invoice: number;
    order_number: bigint;
    invoice_date: Date | null;
    bill_to_name: string;
    billing_address: string | null;
    grand_total_base: string | null;
    grand_total_purchased: string | null;
    status: string | null;
    shipping_address: string | null;
    customer_name: string | null;
    email: string | null;
    customer_group: string | null;
    payment_method: string | null;
    shipping_information: string | null;
    subtotal: string | null;
    shipping_and_handling: string | null;
    id: bigint;
    _count: InvoicesCountAggregate | null;
    _avg: InvoicesAvgAggregate | null;
    _sum: InvoicesSumAggregate | null;
    _min: InvoicesMinAggregate | null;
    _max: InvoicesMaxAggregate | null;
}
