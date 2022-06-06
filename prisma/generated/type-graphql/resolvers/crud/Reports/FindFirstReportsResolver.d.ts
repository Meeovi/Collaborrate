import { GraphQLResolveInfo } from "graphql";
import { FindFirstReportsArgs } from "./args/FindFirstReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class FindFirstReportsResolver {
    findFirstReports(ctx: any, info: GraphQLResolveInfo, args: FindFirstReportsArgs): Promise<Reports | null>;
}
