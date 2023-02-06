import { GraphQLResolveInfo } from "graphql";
import { UpdateOneInvoicesArgs } from "./args/UpdateOneInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class UpdateOneInvoicesResolver {
    updateOneInvoices(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInvoicesArgs): Promise<Invoices | null>;
}
