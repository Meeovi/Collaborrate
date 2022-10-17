import { GraphQLResolveInfo } from "graphql";
import { GroupByMessagesArgs } from "./args/GroupByMessagesArgs";
import { MessagesGroupBy } from "../../outputs/MessagesGroupBy";
export declare class GroupByMessagesResolver {
    groupByMessages(ctx: any, info: GraphQLResolveInfo, args: GroupByMessagesArgs): Promise<MessagesGroupBy[]>;
}
