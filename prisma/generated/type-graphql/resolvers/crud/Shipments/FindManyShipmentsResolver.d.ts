import { GraphQLResolveInfo } from "graphql";
import { FindManyShipmentsArgs } from "./args/FindManyShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class FindManyShipmentsResolver {
    findManyShipments(ctx: any, info: GraphQLResolveInfo, args: FindManyShipmentsArgs): Promise<Shipments[]>;
}
