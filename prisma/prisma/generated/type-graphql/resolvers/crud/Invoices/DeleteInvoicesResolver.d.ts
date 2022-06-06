import { GraphQLResolveInfo } from "graphql";
import { DeleteInvoicesArgs } from "./args/DeleteInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class DeleteInvoicesResolver {
    deleteInvoices(ctx: any, info: GraphQLResolveInfo, args: DeleteInvoicesArgs): Promise<Invoices | null>;
}
