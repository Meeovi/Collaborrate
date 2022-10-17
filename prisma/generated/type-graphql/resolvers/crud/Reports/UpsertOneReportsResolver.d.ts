import { GraphQLResolveInfo } from "graphql";
import { UpsertOneReportsArgs } from "./args/UpsertOneReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class UpsertOneReportsResolver {
    upsertOneReports(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReportsArgs): Promise<Reports>;
}
