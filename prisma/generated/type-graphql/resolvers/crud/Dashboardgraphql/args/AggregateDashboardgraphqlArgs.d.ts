import { DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput";
import { DashboardgraphqlWhereInput } from "../../../inputs/DashboardgraphqlWhereInput";
import { DashboardgraphqlWhereUniqueInput } from "../../../inputs/DashboardgraphqlWhereUniqueInput";
export declare class AggregateDashboardgraphqlArgs {
    where?: DashboardgraphqlWhereInput | undefined;
    orderBy?: DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardgraphqlWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
