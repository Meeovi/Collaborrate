import { GraphQLResolveInfo } from "graphql";
import { UpsertReportsArgs } from "./args/UpsertReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class UpsertReportsResolver {
    upsertReports(ctx: any, info: GraphQLResolveInfo, args: UpsertReportsArgs): Promise<Reports>;
}
