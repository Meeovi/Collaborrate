import { DashboardslistOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardslistOrderByWithRelationAndSearchRelevanceInput";
import { DashboardslistWhereInput } from "../../../inputs/DashboardslistWhereInput";
import { DashboardslistWhereUniqueInput } from "../../../inputs/DashboardslistWhereUniqueInput";
export declare class AggregateDashboardslistArgs {
    where?: DashboardslistWhereInput | undefined;
    orderBy?: DashboardslistOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardslistWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
