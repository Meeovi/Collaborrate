import { GraphQLResolveInfo } from "graphql";
import { AggregateReportsArgs } from "./args/AggregateReportsArgs";
import { CreateManyReportsArgs } from "./args/CreateManyReportsArgs";
import { CreateReportsArgs } from "./args/CreateReportsArgs";
import { DeleteManyReportsArgs } from "./args/DeleteManyReportsArgs";
import { DeleteReportsArgs } from "./args/DeleteReportsArgs";
import { FindFirstReportsArgs } from "./args/FindFirstReportsArgs";
import { FindManyReportsArgs } from "./args/FindManyReportsArgs";
import { FindUniqueReportsArgs } from "./args/FindUniqueReportsArgs";
import { GroupByReportsArgs } from "./args/GroupByReportsArgs";
import { UpdateManyReportsArgs } from "./args/UpdateManyReportsArgs";
import { UpdateReportsArgs } from "./args/UpdateReportsArgs";
import { UpsertReportsArgs } from "./args/UpsertReportsArgs";
import { Reports } from "../../../models/Reports";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReports } from "../../outputs/AggregateReports";
import { ReportsGroupBy } from "../../outputs/ReportsGroupBy";
export declare class ReportsCrudResolver {
    findUniqueReports(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReportsArgs): Promise<Reports | null>;
    findFirstReports(ctx: any, info: GraphQLResolveInfo, args: FindFirstReportsArgs): Promise<Reports | null>;
    findManyReports(ctx: any, info: GraphQLResolveInfo, args: FindManyReportsArgs): Promise<Reports[]>;
    createReports(ctx: any, info: GraphQLResolveInfo, args: CreateReportsArgs): Promise<Reports>;
    createManyReports(ctx: any, info: GraphQLResolveInfo, args: CreateManyReportsArgs): Promise<AffectedRowsOutput>;
    deleteReports(ctx: any, info: GraphQLResolveInfo, args: DeleteReportsArgs): Promise<Reports | null>;
    updateReports(ctx: any, info: GraphQLResolveInfo, args: UpdateReportsArgs): Promise<Reports | null>;
    deleteManyReports(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReportsArgs): Promise<AffectedRowsOutput>;
    updateManyReports(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReportsArgs): Promise<AffectedRowsOutput>;
    upsertReports(ctx: any, info: GraphQLResolveInfo, args: UpsertReportsArgs): Promise<Reports>;
    aggregateReports(ctx: any, info: GraphQLResolveInfo, args: AggregateReportsArgs): Promise<AggregateReports>;
    groupByReports(ctx: any, info: GraphQLResolveInfo, args: GroupByReportsArgs): Promise<ReportsGroupBy[]>;
}