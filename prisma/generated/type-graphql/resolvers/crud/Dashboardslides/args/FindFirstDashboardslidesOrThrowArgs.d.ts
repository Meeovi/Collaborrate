import { DashboardslidesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardslidesOrderByWithRelationAndSearchRelevanceInput";
import { DashboardslidesWhereInput } from "../../../inputs/DashboardslidesWhereInput";
import { DashboardslidesWhereUniqueInput } from "../../../inputs/DashboardslidesWhereUniqueInput";
export declare class FindFirstDashboardslidesOrThrowArgs {
    where?: DashboardslidesWhereInput | undefined;
    orderBy?: DashboardslidesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardslidesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "categories" | "media" | "description"> | undefined;
}
