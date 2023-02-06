import { GraphQLResolveInfo } from "graphql";
import { UpsertOneInvoicesArgs } from "./args/UpsertOneInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class UpsertOneInvoicesResolver {
    upsertOneInvoices(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInvoicesArgs): Promise<Invoices>;
}
