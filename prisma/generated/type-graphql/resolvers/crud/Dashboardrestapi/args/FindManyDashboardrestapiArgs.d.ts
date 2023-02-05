import { DashboardrestapiOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardrestapiOrderByWithRelationAndSearchRelevanceInput";
import { DashboardrestapiWhereInput } from "../../../inputs/DashboardrestapiWhereInput";
import { DashboardrestapiWhereUniqueInput } from "../../../inputs/DashboardrestapiWhereUniqueInput";
export declare class FindManyDashboardrestapiArgs {
    where?: DashboardrestapiWhereInput | undefined;
    orderBy?: DashboardrestapiOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardrestapiWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "url" | "headerValue" | "headerKey" | "authenticationType" | "description"> | undefined;
}
