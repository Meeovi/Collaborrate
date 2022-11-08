import { GraphQLResolveInfo } from "graphql";
import { AggregatePaymentsArgs } from "./args/AggregatePaymentsArgs";
import { AggregatePayments } from "../../outputs/AggregatePayments";
export declare class AggregatePaymentsResolver {
    aggregatePayments(ctx: any, info: GraphQLResolveInfo, args: AggregatePaymentsArgs): Promise<AggregatePayments>;
}
