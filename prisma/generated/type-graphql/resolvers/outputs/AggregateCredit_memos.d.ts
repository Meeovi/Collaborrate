import { Credit_memosAvgAggregate } from "../outputs/Credit_memosAvgAggregate";
import { Credit_memosCountAggregate } from "../outputs/Credit_memosCountAggregate";
import { Credit_memosMaxAggregate } from "../outputs/Credit_memosMaxAggregate";
import { Credit_memosMinAggregate } from "../outputs/Credit_memosMinAggregate";
import { Credit_memosSumAggregate } from "../outputs/Credit_memosSumAggregate";
export declare class AggregateCredit_memos {
    _count: Credit_memosCountAggregate | null;
    _avg: Credit_memosAvgAggregate | null;
    _sum: Credit_memosSumAggregate | null;
    _min: Credit_memosMinAggregate | null;
    _max: Credit_memosMaxAggregate | null;
}
