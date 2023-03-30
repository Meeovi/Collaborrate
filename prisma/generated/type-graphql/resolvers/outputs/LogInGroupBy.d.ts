import { LogInAvgAggregate } from "../outputs/LogInAvgAggregate";
import { LogInCountAggregate } from "../outputs/LogInCountAggregate";
import { LogInMaxAggregate } from "../outputs/LogInMaxAggregate";
import { LogInMinAggregate } from "../outputs/LogInMinAggregate";
import { LogInSumAggregate } from "../outputs/LogInSumAggregate";
export declare class LogInGroupBy {
    id: bigint;
    created_at: Date | null;
    email: string | null;
    password: string | null;
    token: string | null;
    expiresIn: string | null;
    users: string | null;
    username: string | null;
    _count: LogInCountAggregate | null;
    _avg: LogInAvgAggregate | null;
    _sum: LogInSumAggregate | null;
    _min: LogInMinAggregate | null;
    _max: LogInMaxAggregate | null;
}
