import { GraphQLResolveInfo } from "graphql";
import { CreateManyInvoicesArgs } from "./args/CreateManyInvoicesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInvoicesResolver {
    createManyInvoices(ctx: any, info: GraphQLResolveInfo, args: CreateManyInvoicesArgs): Promise<AffectedRowsOutput>;
}
