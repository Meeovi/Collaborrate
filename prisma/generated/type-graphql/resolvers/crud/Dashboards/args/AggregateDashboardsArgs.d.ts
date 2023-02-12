import { DashboardsOrderByWithRelationInput } from "../../../inputs/DashboardsOrderByWithRelationInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";
export declare class AggregateDashboardsArgs {
    where?: DashboardsWhereInput | undefined;
    orderBy?: DashboardsOrderByWithRelationInput[] | undefined;
    cursor?: DashboardsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
