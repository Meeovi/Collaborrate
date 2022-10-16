import { AccountsAvgAggregate } from "../outputs/AccountsAvgAggregate";
import { AccountsCountAggregate } from "../outputs/AccountsCountAggregate";
import { AccountsMaxAggregate } from "../outputs/AccountsMaxAggregate";
import { AccountsMinAggregate } from "../outputs/AccountsMinAggregate";
import { AccountsSumAggregate } from "../outputs/AccountsSumAggregate";
export declare class AggregateAccounts {
    _count: AccountsCountAggregate | null;
    _avg: AccountsAvgAggregate | null;
    _sum: AccountsSumAggregate | null;
    _min: AccountsMinAggregate | null;
    _max: AccountsMaxAggregate | null;
}
