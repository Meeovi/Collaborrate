import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInvoicesOrThrowArgs } from "./args/FindUniqueInvoicesOrThrowArgs";
import { Invoices } from "../../../models/Invoices";
export declare class FindUniqueInvoicesOrThrowResolver {
    findUniqueInvoicesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInvoicesOrThrowArgs): Promise<Invoices | null>;
}
