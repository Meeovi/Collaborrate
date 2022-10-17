import { ContractsAvgAggregate } from "../outputs/ContractsAvgAggregate";
import { ContractsCountAggregate } from "../outputs/ContractsCountAggregate";
import { ContractsMaxAggregate } from "../outputs/ContractsMaxAggregate";
import { ContractsMinAggregate } from "../outputs/ContractsMinAggregate";
import { ContractsSumAggregate } from "../outputs/ContractsSumAggregate";
export declare class AggregateContracts {
    _count: ContractsCountAggregate | null;
    _avg: ContractsAvgAggregate | null;
    _sum: ContractsSumAggregate | null;
    _min: ContractsMinAggregate | null;
    _max: ContractsMaxAggregate | null;
}
