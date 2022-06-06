import { Customer_paymentAvgAggregate } from "../outputs/Customer_paymentAvgAggregate";
import { Customer_paymentCountAggregate } from "../outputs/Customer_paymentCountAggregate";
import { Customer_paymentMaxAggregate } from "../outputs/Customer_paymentMaxAggregate";
import { Customer_paymentMinAggregate } from "../outputs/Customer_paymentMinAggregate";
import { Customer_paymentSumAggregate } from "../outputs/Customer_paymentSumAggregate";
export declare class AggregateCustomer_payment {
    _count: Customer_paymentCountAggregate | null;
    _avg: Customer_paymentAvgAggregate | null;
    _sum: Customer_paymentSumAggregate | null;
    _min: Customer_paymentMinAggregate | null;
    _max: Customer_paymentMaxAggregate | null;
}
