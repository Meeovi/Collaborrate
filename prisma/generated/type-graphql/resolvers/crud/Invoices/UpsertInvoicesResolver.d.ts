import { GraphQLResolveInfo } from "graphql";
import { UpsertInvoicesArgs } from "./args/UpsertInvoicesArgs";
import { Invoices } from "../../../models/Invoices";
export declare class UpsertInvoicesResolver {
    upsertInvoices(ctx: any, info: GraphQLResolveInfo, args: UpsertInvoicesArgs): Promise<Invoices>;
}
