import { DashboardslistOrderByWithRelationInput } from "../../../inputs/DashboardslistOrderByWithRelationInput";
import { DashboardslistWhereInput } from "../../../inputs/DashboardslistWhereInput";
import { DashboardslistWhereUniqueInput } from "../../../inputs/DashboardslistWhereUniqueInput";
export declare class AggregateDashboardslistArgs {
    where?: DashboardslistWhereInput | undefined;
    orderBy?: DashboardslistOrderByWithRelationInput[] | undefined;
    cursor?: DashboardslistWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
