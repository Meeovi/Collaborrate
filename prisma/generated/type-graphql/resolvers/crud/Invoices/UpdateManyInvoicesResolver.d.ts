import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInvoicesArgs } from "./args/UpdateManyInvoicesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInvoicesResolver {
    updateManyInvoices(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInvoicesArgs): Promise<AffectedRowsOutput>;
}
