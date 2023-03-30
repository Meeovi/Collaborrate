import { DashboardslidesOrderByWithRelationInput } from "../../../inputs/DashboardslidesOrderByWithRelationInput";
import { DashboardslidesWhereInput } from "../../../inputs/DashboardslidesWhereInput";
import { DashboardslidesWhereUniqueInput } from "../../../inputs/DashboardslidesWhereUniqueInput";
export declare class AggregateDashboardslidesArgs {
    where?: DashboardslidesWhereInput | undefined;
    orderBy?: DashboardslidesOrderByWithRelationInput[] | undefined;
    cursor?: DashboardslidesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
