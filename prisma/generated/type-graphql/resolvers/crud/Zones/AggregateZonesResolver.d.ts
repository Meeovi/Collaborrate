import { GraphQLResolveInfo } from "graphql";
import { AggregateZonesArgs } from "./args/AggregateZonesArgs";
import { AggregateZones } from "../../outputs/AggregateZones";
export declare class AggregateZonesResolver {
    aggregateZones(ctx: any, info: GraphQLResolveInfo, args: AggregateZonesArgs): Promise<AggregateZones>;
}
