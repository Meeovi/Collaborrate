import { GraphQLResolveInfo } from "graphql";
import { GroupByWebhooksArgs } from "./args/GroupByWebhooksArgs";
import { WebhooksGroupBy } from "../../outputs/WebhooksGroupBy";
export declare class GroupByWebhooksResolver {
    groupByWebhooks(ctx: any, info: GraphQLResolveInfo, args: GroupByWebhooksArgs): Promise<WebhooksGroupBy[]>;
}
