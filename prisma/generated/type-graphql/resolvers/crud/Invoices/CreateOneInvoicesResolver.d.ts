import { GraphQLResolveInfo } from "graphql";
import { CreateOneInvoicesArgs } from "./args/CreateOneInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class CreateOneInvoicesResolver {
    createOneInvoices(ctx: any, info: GraphQLResolveInfo, args: CreateOneInvoicesArgs): Promise<Invoices>;
}
