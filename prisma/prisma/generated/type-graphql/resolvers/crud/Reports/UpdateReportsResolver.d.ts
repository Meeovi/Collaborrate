import { GraphQLResolveInfo } from "graphql";
import { UpdateReportsArgs } from "./args/UpdateReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class UpdateReportsResolver {
    updateReports(ctx: any, info: GraphQLResolveInfo, args: UpdateReportsArgs): Promise<Reports | null>;
}
