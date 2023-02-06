import { TransactionsAvgAggregate } from "../outputs/TransactionsAvgAggregate";
import { TransactionsCountAggregate } from "../outputs/TransactionsCountAggregate";
import { TransactionsMaxAggregate } from "../outputs/TransactionsMaxAggregate";
import { TransactionsMinAggregate } from "../outputs/TransactionsMinAggregate";
import { TransactionsSumAggregate } from "../outputs/TransactionsSumAggregate";
export declare class TransactionsGroupBy {
    id: number;
    order_id: number;
    transaction_id: number;
    parent_transaction_id: number;
    created: Date | null;
    payment_method: bigint;
    closed: string | null;
    customer_payment: string | null;
    orders: string | null;
    _count: TransactionsCountAggregate | null;
    _avg: TransactionsAvgAggregate | null;
    _sum: TransactionsSumAggregate | null;
    _min: TransactionsMinAggregate | null;
    _max: TransactionsMaxAggregate | null;
}
