import { GraphQLResolveInfo } from "graphql";
import { GroupByZonesArgs } from "./args/GroupByZonesArgs";
import { ZonesGroupBy } from "../../outputs/ZonesGroupBy";
export declare class GroupByZonesResolver {
    groupByZones(ctx: any, info: GraphQLResolveInfo, args: GroupByZonesArgs): Promise<ZonesGroupBy[]>;
}
