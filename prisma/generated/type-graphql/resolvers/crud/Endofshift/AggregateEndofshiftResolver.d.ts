import { GraphQLResolveInfo } from "graphql";
import { AggregateEndofshiftArgs } from "./args/AggregateEndofshiftArgs";
import { AggregateEndofshift } from "../../outputs/AggregateEndofshift";
export declare class AggregateEndofshiftResolver {
    aggregateEndofshift(ctx: any, info: GraphQLResolveInfo, args: AggregateEndofshiftArgs): Promise<AggregateEndofshift>;
}
