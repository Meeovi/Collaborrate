import { UsersAvgAggregate } from "../outputs/UsersAvgAggregate";
import { UsersCountAggregate } from "../outputs/UsersCountAggregate";
import { UsersMaxAggregate } from "../outputs/UsersMaxAggregate";
import { UsersMinAggregate } from "../outputs/UsersMinAggregate";
import { UsersSumAggregate } from "../outputs/UsersSumAggregate";
export declare class UsersGroupBy {
    id: bigint;
    username: string;
    first_name: string;
    last_name: string | null;
    email: string;
    password: string;
    phone: string | null;
    permissions: string | null;
    created_at: Date | null;
    mediamanager: string | null;
    _count: UsersCountAggregate | null;
    _avg: UsersAvgAggregate | null;
    _sum: UsersSumAggregate | null;
    _min: UsersMinAggregate | null;
    _max: UsersMaxAggregate | null;
}
