import { GraphQLResolveInfo } from "graphql";
import { FindManyReportsArgs } from "./args/FindManyReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class FindManyReportsResolver {
    findManyReports(ctx: any, info: GraphQLResolveInfo, args: FindManyReportsArgs): Promise<Reports[]>;
}
