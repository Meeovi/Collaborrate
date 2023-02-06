import { GraphQLResolveInfo } from "graphql";
import { DeleteOneInvoicesArgs } from "./args/DeleteOneInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class DeleteOneInvoicesResolver {
    deleteOneInvoices(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInvoicesArgs): Promise<Invoices | null>;
}
