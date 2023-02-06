import { GraphQLResolveInfo } from "graphql";
import { FindFirstInvoicesArgs } from "./args/FindFirstInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class FindFirstInvoicesResolver {
    findFirstInvoices(ctx: any, info: GraphQLResolveInfo, args: FindFirstInvoicesArgs): Promise<Invoices | null>;
}
