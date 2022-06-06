import { Credit_memosAvgAggregate } from "../outputs/Credit_memosAvgAggregate";
import { Credit_memosCountAggregate } from "../outputs/Credit_memosCountAggregate";
import { Credit_memosMaxAggregate } from "../outputs/Credit_memosMaxAggregate";
import { Credit_memosMinAggregate } from "../outputs/Credit_memosMinAggregate";
import { Credit_memosSumAggregate } from "../outputs/Credit_memosSumAggregate";
export declare class Credit_memosGroupBy {
    credit_memo: string;
    order_number: number;
    created: Date | null;
    bill_to_name: string;
    status: string | null;
    refunded: string | null;
    action: string | null;
    id: bigint;
    cust_id: number;
    prod_id: bigint;
    _count: Credit_memosCountAggregate | null;
    _avg: Credit_memosAvgAggregate | null;
    _sum: Credit_memosSumAggregate | null;
    _min: Credit_memosMinAggregate | null;
    _max: Credit_memosMaxAggregate | null;
}
