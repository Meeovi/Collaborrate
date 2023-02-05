import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInvoicesArgs } from "./args/FindUniqueInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class FindUniqueInvoicesResolver {
    findUniqueInvoices(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInvoicesArgs): Promise<Invoices | null>;
}
