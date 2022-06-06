import { GraphQLResolveInfo } from "graphql";
import { AggregateNewsletter_subscribersArgs } from "./args/AggregateNewsletter_subscribersArgs";
import { AggregateNewsletter_subscribers } from "../../outputs/AggregateNewsletter_subscribers";
export declare class AggregateNewsletter_subscribersResolver {
    aggregateNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: AggregateNewsletter_subscribersArgs): Promise<AggregateNewsletter_subscribers>;
}
