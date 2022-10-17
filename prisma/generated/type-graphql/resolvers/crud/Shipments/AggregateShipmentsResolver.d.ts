import { GraphQLResolveInfo } from "graphql";
import { AggregateShipmentsArgs } from "./args/AggregateShipmentsArgs";
import { AggregateShipments } from "../../outputs/AggregateShipments";
export declare class AggregateShipmentsResolver {
    aggregateShipments(ctx: any, info: GraphQLResolveInfo, args: AggregateShipmentsArgs): Promise<AggregateShipments>;
}
