import { GraphQLResolveInfo } from "graphql";
import { AggregateWebhooksArgs } from "./args/AggregateWebhooksArgs";
import { AggregateWebhooks } from "../../outputs/AggregateWebhooks";
export declare class AggregateWebhooksResolver {
    aggregateWebhooks(ctx: any, info: GraphQLResolveInfo, args: AggregateWebhooksArgs): Promise<AggregateWebhooks>;
}
