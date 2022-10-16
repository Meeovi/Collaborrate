import { GraphQLResolveInfo } from "graphql";
import { AggregateArticlesArgs } from "./args/AggregateArticlesArgs";
import { AggregateArticles } from "../../outputs/AggregateArticles";
export declare class AggregateArticlesResolver {
    aggregateArticles(ctx: any, info: GraphQLResolveInfo, args: AggregateArticlesArgs): Promise<AggregateArticles>;
}
