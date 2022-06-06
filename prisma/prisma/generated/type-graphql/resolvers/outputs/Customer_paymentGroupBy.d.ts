import { Customer_paymentAvgAggregate } from "../outputs/Customer_paymentAvgAggregate";
import { Customer_paymentCountAggregate } from "../outputs/Customer_paymentCountAggregate";
import { Customer_paymentMaxAggregate } from "../outputs/Customer_paymentMaxAggregate";
import { Customer_paymentMinAggregate } from "../outputs/Customer_paymentMinAggregate";
import { Customer_paymentSumAggregate } from "../outputs/Customer_paymentSumAggregate";
export declare class Customer_paymentGroupBy {
    id: bigint;
    created_at: Date | null;
    cust_id: number;
    payment_info: string | null;
    provider: string | null;
    account_no: bigint;
    expiry: bigint | null;
    _count: Customer_paymentCountAggregate | null;
    _avg: Customer_paymentAvgAggregate | null;
    _sum: Customer_paymentSumAggregate | null;
    _min: Customer_paymentMinAggregate | null;
    _max: Customer_paymentMaxAggregate | null;
}
