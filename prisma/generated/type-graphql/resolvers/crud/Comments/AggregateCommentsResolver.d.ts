import { GraphQLResolveInfo } from "graphql";
import { AggregateCommentsArgs } from "./args/AggregateCommentsArgs";
import { AggregateComments } from "../../outputs/AggregateComments";
export declare class AggregateCommentsResolver {
    aggregateComments(ctx: any, info: GraphQLResolveInfo, args: AggregateCommentsArgs): Promise<AggregateComments>;
}
