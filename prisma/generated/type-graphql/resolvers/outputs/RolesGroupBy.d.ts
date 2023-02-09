import { RolesAvgAggregate } from "../outputs/RolesAvgAggregate";
import { RolesCountAggregate } from "../outputs/RolesCountAggregate";
import { RolesMaxAggregate } from "../outputs/RolesMaxAggregate";
import { RolesMinAggregate } from "../outputs/RolesMinAggregate";
import { RolesSumAggregate } from "../outputs/RolesSumAggregate";
export declare class RolesGroupBy {
    id: number;
    role_name: string;
    content: string | null;
    created_at: Date | null;
    type: string | null;
    createRole: string | null;
    updateRole: string | null;
    deleteRole: string | null;
    publishRole: string | null;
    unpublishRole: string | null;
    role: string | null;
    _count: RolesCountAggregate | null;
    _avg: RolesAvgAggregate | null;
    _sum: RolesSumAggregate | null;
    _min: RolesMinAggregate | null;
    _max: RolesMaxAggregate | null;
}
