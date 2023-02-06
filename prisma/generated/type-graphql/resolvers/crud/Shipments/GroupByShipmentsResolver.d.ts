import { GraphQLResolveInfo } from "graphql";
import { GroupByShipmentsArgs } from "./args/GroupByShipmentsArgs";
import { ShipmentsGroupBy } from "../../outputs/ShipmentsGroupBy";
export declare class GroupByShipmentsResolver {
    groupByShipments(ctx: any, info: GraphQLResolveInfo, args: GroupByShipmentsArgs): Promise<ShipmentsGroupBy[]>;
}
