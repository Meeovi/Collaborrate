import { GraphQLResolveInfo } from "graphql";
import { DeleteOneReportsArgs } from "./args/DeleteOneReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class DeleteOneReportsResolver {
    deleteOneReports(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReportsArgs): Promise<Reports | null>;
}
