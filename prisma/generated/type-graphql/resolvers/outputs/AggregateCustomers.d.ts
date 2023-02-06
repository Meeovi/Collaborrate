import { CustomersAvgAggregate } from "../outputs/CustomersAvgAggregate";
import { CustomersCountAggregate } from "../outputs/CustomersCountAggregate";
import { CustomersMaxAggregate } from "../outputs/CustomersMaxAggregate";
import { CustomersMinAggregate } from "../outputs/CustomersMinAggregate";
import { CustomersSumAggregate } from "../outputs/CustomersSumAggregate";
export declare class AggregateCustomers {
    _count: CustomersCountAggregate | null;
    _avg: CustomersAvgAggregate | null;
    _sum: CustomersSumAggregate | null;
    _min: CustomersMinAggregate | null;
    _max: CustomersMaxAggregate | null;
}
