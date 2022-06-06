import { GraphQLResolveInfo } from "graphql";
import { DeleteReportsArgs } from "./args/DeleteReportsArgs";
import { Reports } from "../../../models/Reports";
export declare class DeleteReportsResolver {
    deleteReports(ctx: any, info: GraphQLResolveInfo, args: DeleteReportsArgs): Promise<Reports | null>;
}
