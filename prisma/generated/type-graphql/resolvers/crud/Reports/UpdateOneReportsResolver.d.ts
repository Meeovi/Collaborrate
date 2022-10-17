import { GraphQLResolveInfo } from "graphql";
import { UpdateOneReportsArgs } from "./args/UpdateOneReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class UpdateOneReportsResolver {
    updateOneReports(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReportsArgs): Promise<Reports | null>;
}
