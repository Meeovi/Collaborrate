import { PermissionsAvgAggregate } from "../outputs/PermissionsAvgAggregate";
import { PermissionsCountAggregate } from "../outputs/PermissionsCountAggregate";
import { PermissionsMaxAggregate } from "../outputs/PermissionsMaxAggregate";
import { PermissionsMinAggregate } from "../outputs/PermissionsMinAggregate";
import { PermissionsSumAggregate } from "../outputs/PermissionsSumAggregate";
export declare class PermissionsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    content: string | null;
    _count: PermissionsCountAggregate | null;
    _avg: PermissionsAvgAggregate | null;
    _sum: PermissionsSumAggregate | null;
    _min: PermissionsMinAggregate | null;
    _max: PermissionsMaxAggregate | null;
}
