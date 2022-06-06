import { GraphQLResolveInfo } from "graphql";
import { GroupByInvoicesArgs } from "./args/GroupByInvoicesArgs";
import { InvoicesGroupBy } from "../../outputs/InvoicesGroupBy";
export declare class GroupByInvoicesResolver {
    groupByInvoices(ctx: any, info: GraphQLResolveInfo, args: GroupByInvoicesArgs): Promise<InvoicesGroupBy[]>;
}
