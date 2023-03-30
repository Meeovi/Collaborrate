import { DashboardrestapiOrderByWithRelationInput } from "../../../inputs/DashboardrestapiOrderByWithRelationInput";
import { DashboardrestapiWhereInput } from "../../../inputs/DashboardrestapiWhereInput";
import { DashboardrestapiWhereUniqueInput } from "../../../inputs/DashboardrestapiWhereUniqueInput";
export declare class FindFirstDashboardrestapiOrThrowArgs {
    where?: DashboardrestapiWhereInput | undefined;
    orderBy?: DashboardrestapiOrderByWithRelationInput[] | undefined;
    cursor?: DashboardrestapiWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "url" | "headerValue" | "headerKey" | "authenticationType" | "description"> | undefined;
}
