import { CustomerAvgAggregate } from "../outputs/CustomerAvgAggregate";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
import { CustomerSumAggregate } from "../outputs/CustomerSumAggregate";
export declare class CustomerGroupBy {
    id: bigint;
    created_at: Date | null;
    firstname: string | null;
    lastname: string | null;
    username: string | null;
    email: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal: string | null;
    active: string | null;
    _count: CustomerCountAggregate | null;
    _avg: CustomerAvgAggregate | null;
    _sum: CustomerSumAggregate | null;
    _min: CustomerMinAggregate | null;
    _max: CustomerMaxAggregate | null;
}
