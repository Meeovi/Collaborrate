import { DashboardjsonOrderByWithRelationInput } from "../../../inputs/DashboardjsonOrderByWithRelationInput";
import { DashboardjsonWhereInput } from "../../../inputs/DashboardjsonWhereInput";
import { DashboardjsonWhereUniqueInput } from "../../../inputs/DashboardjsonWhereUniqueInput";
export declare class FindFirstDashboardjsonOrThrowArgs {
    where?: DashboardjsonWhereInput | undefined;
    orderBy?: DashboardjsonOrderByWithRelationInput[] | undefined;
    cursor?: DashboardjsonWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "url" | "description" | "definition" | "format"> | undefined;
}
