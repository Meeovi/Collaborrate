import { GraphQLResolveInfo } from "graphql";
import { UpdateInvoicesArgs } from "./args/UpdateInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class UpdateInvoicesResolver {
    updateInvoices(ctx: any, info: GraphQLResolveInfo, args: UpdateInvoicesArgs): Promise<Invoices | null>;
}
