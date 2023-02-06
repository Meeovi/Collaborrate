import { LogInAvgAggregate } from "../outputs/LogInAvgAggregate";
import { LogInCountAggregate } from "../outputs/LogInCountAggregate";
import { LogInMaxAggregate } from "../outputs/LogInMaxAggregate";
import { LogInMinAggregate } from "../outputs/LogInMinAggregate";
import { LogInSumAggregate } from "../outputs/LogInSumAggregate";
export declare class AggregateLogIn {
    _count: LogInCountAggregate | null;
    _avg: LogInAvgAggregate | null;
    _sum: LogInSumAggregate | null;
    _min: LogInMinAggregate | null;
    _max: LogInMaxAggregate | null;
}
