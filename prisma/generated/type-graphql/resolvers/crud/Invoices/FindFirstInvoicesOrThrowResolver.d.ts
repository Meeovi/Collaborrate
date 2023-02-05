import { GraphQLResolveInfo } from "graphql";
import { FindFirstInvoicesOrThrowArgs } from "./args/FindFirstInvoicesOrThrowArgs";
import { Invoices } from "../../../models/Invoices";
export declare class FindFirstInvoicesOrThrowResolver {
    findFirstInvoicesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstInvoicesOrThrowArgs): Promise<Invoices | null>;
}
