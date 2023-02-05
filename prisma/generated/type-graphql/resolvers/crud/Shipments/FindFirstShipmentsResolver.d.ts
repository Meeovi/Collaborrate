import { GraphQLResolveInfo } from "graphql";
import { FindFirstShipmentsArgs } from "./args/FindFirstShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class FindFirstShipmentsResolver {
    findFirstShipments(ctx: any, info: GraphQLResolveInfo, args: FindFirstShipmentsArgs): Promise<Shipments | null>;
}
