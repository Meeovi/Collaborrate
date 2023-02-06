import { GraphQLResolveInfo } from "graphql";
import { AggregateInvoicesArgs } from "./args/AggregateInvoicesArgs";
import { AggregateInvoices } from "../../outputs/AggregateInvoices";
export declare class AggregateInvoicesResolver {
    aggregateInvoices(ctx: any, info: GraphQLResolveInfo, args: AggregateInvoicesArgs): Promise<AggregateInvoices>;
}
