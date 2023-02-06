import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInvoicesArgs } from "./args/DeleteManyInvoicesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInvoicesResolver {
    deleteManyInvoices(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInvoicesArgs): Promise<AffectedRowsOutput>;
}
