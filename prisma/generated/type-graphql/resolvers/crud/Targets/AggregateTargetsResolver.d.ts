import { GraphQLResolveInfo } from "graphql";
import { AggregateTargetsArgs } from "./args/AggregateTargetsArgs";
import { AggregateTargets } from "../../outputs/AggregateTargets";
export declare class AggregateTargetsResolver {
    aggregateTargets(ctx: any, info: GraphQLResolveInfo, args: AggregateTargetsArgs): Promise<AggregateTargets>;
}
