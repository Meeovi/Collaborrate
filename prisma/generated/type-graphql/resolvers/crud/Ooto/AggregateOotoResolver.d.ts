import { GraphQLResolveInfo } from "graphql";
import { AggregateOotoArgs } from "./args/AggregateOotoArgs";
import { AggregateOoto } from "../../outputs/AggregateOoto";
export declare class AggregateOotoResolver {
    aggregateOoto(ctx: any, info: GraphQLResolveInfo, args: AggregateOotoArgs): Promise<AggregateOoto>;
}
