import { GraphQLResolveInfo } from "graphql";
import { CreateInvoicesArgs } from "./args/CreateInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class CreateInvoicesResolver {
    createInvoices(ctx: any, info: GraphQLResolveInfo, args: CreateInvoicesArgs): Promise<Invoices>;
}
