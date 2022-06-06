import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomer_paymentArgs } from "./args/AggregateCustomer_paymentArgs";
import { AggregateCustomer_payment } from "../../outputs/AggregateCustomer_payment";
export declare class AggregateCustomer_paymentResolver {
    aggregateCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomer_paymentArgs): Promise<AggregateCustomer_payment>;
}
