import { GraphQLResolveInfo } from "graphql";
import { CreateOneReportsArgs } from "./args/CreateOneReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class CreateOneReportsResolver {
    createOneReports(ctx: any, info: GraphQLResolveInfo, args: CreateOneReportsArgs): Promise<Reports>;
}
