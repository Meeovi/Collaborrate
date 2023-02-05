import { UsersAvgAggregate } from "../outputs/UsersAvgAggregate";
import { UsersCountAggregate } from "../outputs/UsersCountAggregate";
import { UsersMaxAggregate } from "../outputs/UsersMaxAggregate";
import { UsersMinAggregate } from "../outputs/UsersMinAggregate";
import { UsersSumAggregate } from "../outputs/UsersSumAggregate";
export declare class AggregateUsers {
    _count: UsersCountAggregate | null;
    _avg: UsersAvgAggregate | null;
    _sum: UsersSumAggregate | null;
    _min: UsersMinAggregate | null;
    _max: UsersMaxAggregate | null;
}
