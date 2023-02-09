import { GraphQLResolveInfo } from "graphql";
import { FindManyInvoicesArgs } from "./args/FindManyInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class FindManyInvoicesResolver {
    findManyInvoices(ctx: any, info: GraphQLResolveInfo, args: FindManyInvoicesArgs): Promise<Invoices[]>;
}
