import { CustomerAvgAggregate } from "../outputs/CustomerAvgAggregate";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
import { CustomerSumAggregate } from "../outputs/CustomerSumAggregate";
export declare class AggregateCustomer {
    _count: CustomerCountAggregate | null;
    _avg: CustomerAvgAggregate | null;
    _sum: CustomerSumAggregate | null;
    _min: CustomerMinAggregate | null;
    _max: CustomerMaxAggregate | null;
}
