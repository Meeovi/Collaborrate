import { GraphQLResolveInfo } from "graphql";
import { CreateReportsArgs } from "./args/CreateReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class CreateReportsResolver {
    createReports(ctx: any, info: GraphQLResolveInfo, args: CreateReportsArgs): Promise<Reports>;
}
