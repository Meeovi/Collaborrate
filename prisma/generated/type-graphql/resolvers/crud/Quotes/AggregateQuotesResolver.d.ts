import { GraphQLResolveInfo } from "graphql";
import { AggregateQuotesArgs } from "./args/AggregateQuotesArgs";
import { AggregateQuotes } from "../../outputs/AggregateQuotes";
export declare class AggregateQuotesResolver {
    aggregateQuotes(ctx: any, info: GraphQLResolveInfo, args: AggregateQuotesArgs): Promise<AggregateQuotes>;
}
