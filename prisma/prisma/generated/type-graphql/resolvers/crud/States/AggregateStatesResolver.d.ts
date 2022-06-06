import { GraphQLResolveInfo } from "graphql";
import { AggregateStatesArgs } from "./args/AggregateStatesArgs";
import { AggregateStates } from "../../outputs/AggregateStates";
export declare class AggregateStatesResolver {
    aggregateStates(ctx: any, info: GraphQLResolveInfo, args: AggregateStatesArgs): Promise<AggregateStates>;
}
