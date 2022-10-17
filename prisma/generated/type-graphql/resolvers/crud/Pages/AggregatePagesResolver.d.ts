import { GraphQLResolveInfo } from "graphql";
import { AggregatePagesArgs } from "./args/AggregatePagesArgs";
import { AggregatePages } from "../../outputs/AggregatePages";
export declare class AggregatePagesResolver {
    aggregatePages(ctx: any, info: GraphQLResolveInfo, args: AggregatePagesArgs): Promise<AggregatePages>;
}
