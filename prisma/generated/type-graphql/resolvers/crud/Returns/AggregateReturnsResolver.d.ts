import { GraphQLResolveInfo } from "graphql";
import { AggregateReturnsArgs } from "./args/AggregateReturnsArgs";
import { AggregateReturns } from "../../outputs/AggregateReturns";
export declare class AggregateReturnsResolver {
    aggregateReturns(ctx: any, info: GraphQLResolveInfo, args: AggregateReturnsArgs): Promise<AggregateReturns>;
}
