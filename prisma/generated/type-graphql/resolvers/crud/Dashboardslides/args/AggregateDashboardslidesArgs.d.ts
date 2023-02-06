import { DashboardslidesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardslidesOrderByWithRelationAndSearchRelevanceInput";
import { DashboardslidesWhereInput } from "../../../inputs/DashboardslidesWhereInput";
import { DashboardslidesWhereUniqueInput } from "../../../inputs/DashboardslidesWhereUniqueInput";
export declare class AggregateDashboardslidesArgs {
    where?: DashboardslidesWhereInput | undefined;
    orderBy?: DashboardslidesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardslidesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
