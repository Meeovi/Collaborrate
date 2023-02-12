import { GraphQLResolveInfo } from "graphql";
import { AggregateDashboardslistArgs } from "./args/AggregateDashboardslistArgs";
import { CreateManyDashboardslistArgs } from "./args/CreateManyDashboardslistArgs";
import { CreateOneDashboardslistArgs } from "./args/CreateOneDashboardslistArgs";
import { DeleteManyDashboardslistArgs } from "./args/DeleteManyDashboardslistArgs";
import { DeleteOneDashboardslistArgs } from "./args/DeleteOneDashboardslistArgs";
import { FindFirstDashboardslistArgs } from "./args/FindFirstDashboardslistArgs";
import { FindFirstDashboardslistOrThrowArgs } from "./args/FindFirstDashboardslistOrThrowArgs";
import { FindManyDashboardslistArgs } from "./args/FindManyDashboardslistArgs";
import { FindUniqueDashboardslistArgs } from "./args/FindUniqueDashboardslistArgs";
import { FindUniqueDashboardslistOrThrowArgs } from "./args/FindUniqueDashboardslistOrThrowArgs";
import { GroupByDashboardslistArgs } from "./args/GroupByDashboardslistArgs";
import { UpdateManyDashboardslistArgs } from "./args/UpdateManyDashboardslistArgs";
import { UpdateOneDashboardslistArgs } from "./args/UpdateOneDashboardslistArgs";
import { UpsertOneDashboardslistArgs } from "./args/UpsertOneDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDashboardslist } from "../../outputs/AggregateDashboardslist";
import { DashboardslistGroupBy } from "../../outputs/DashboardslistGroupBy";
export declare class DashboardslistCrudResolver {
    aggregateDashboardslist(ctx: any, info: GraphQLResolveInfo, args: AggregateDashboardslistArgs): Promise<AggregateDashboardslist>;
    createManyDashboardslist(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardslistArgs): Promise<AffectedRowsOutput>;
    createOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardslistArgs): Promise<Dashboardslist>;
    deleteManyDashboardslist(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardslistArgs): Promise<AffectedRowsOutput>;
    deleteOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardslistArgs): Promise<Dashboardslist | null>;
    findFirstDashboardslist(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardslistArgs): Promise<Dashboardslist | null>;
    findFirstDashboardslistOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardslistOrThrowArgs): Promise<Dashboardslist | null>;
    dashboardslists(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardslistArgs): Promise<Dashboardslist[]>;
    dashboardslist(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardslistArgs): Promise<Dashboardslist | null>;
    getDashboardslist(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardslistOrThrowArgs): Promise<Dashboardslist | null>;
    groupByDashboardslist(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardslistArgs): Promise<DashboardslistGroupBy[]>;
    updateManyDashboardslist(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardslistArgs): Promise<AffectedRowsOutput>;
    updateOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardslistArgs): Promise<Dashboardslist | null>;
    upsertOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardslistArgs): Promise<Dashboardslist>;
}