import { GraphQLResolveInfo } from "graphql";
import { AggregateMessagesArgs } from "./args/AggregateMessagesArgs";
import { AggregateMessages } from "../../outputs/AggregateMessages";
export declare class AggregateMessagesResolver {
    aggregateMessages(ctx: any, info: GraphQLResolveInfo, args: AggregateMessagesArgs): Promise<AggregateMessages>;
}
