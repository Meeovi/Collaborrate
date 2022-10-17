import { GraphQLResolveInfo } from "graphql";
import { AggregatePollsArgs } from "./args/AggregatePollsArgs";
import { AggregatePolls } from "../../outputs/AggregatePolls";
export declare class AggregatePollsResolver {
    aggregatePolls(ctx: any, info: GraphQLResolveInfo, args: AggregatePollsArgs): Promise<AggregatePolls>;
}
