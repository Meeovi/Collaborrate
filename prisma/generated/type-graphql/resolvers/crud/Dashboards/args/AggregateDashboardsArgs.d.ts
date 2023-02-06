import { DashboardsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardsOrderByWithRelationAndSearchRelevanceInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";
export declare class AggregateDashboardsArgs {
    where?: DashboardsWhereInput | undefined;
    orderBy?: DashboardsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
