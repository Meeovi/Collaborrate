import { DashboardsCreateInput } from "../../../inputs/DashboardsCreateInput";
import { DashboardsUpdateInput } from "../../../inputs/DashboardsUpdateInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";
export declare class UpsertOneDashboardsArgs {
    where: DashboardsWhereUniqueInput;
    create: DashboardsCreateInput;
    update: DashboardsUpdateInput;
}
