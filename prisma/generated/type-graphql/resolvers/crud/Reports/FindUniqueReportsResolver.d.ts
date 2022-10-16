import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReportsArgs } from "./args/FindUniqueReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class FindUniqueReportsResolver {
    findUniqueReports(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReportsArgs): Promise<Reports | null>;
}
