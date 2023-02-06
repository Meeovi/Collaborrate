import { TransactionsAvgAggregate } from "../outputs/TransactionsAvgAggregate";
import { TransactionsCountAggregate } from "../outputs/TransactionsCountAggregate";
import { TransactionsMaxAggregate } from "../outputs/TransactionsMaxAggregate";
import { TransactionsMinAggregate } from "../outputs/TransactionsMinAggregate";
import { TransactionsSumAggregate } from "../outputs/TransactionsSumAggregate";
export declare class AggregateTransactions {
    _count: TransactionsCountAggregate | null;
    _avg: TransactionsAvgAggregate | null;
    _sum: TransactionsSumAggregate | null;
    _min: TransactionsMinAggregate | null;
    _max: TransactionsMaxAggregate | null;
}
