import { GraphQLResolveInfo } from "graphql";
import { UpsertShipmentsArgs } from "./args/UpsertShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class UpsertShipmentsResolver {
    upsertShipments(ctx: any, info: GraphQLResolveInfo, args: UpsertShipmentsArgs): Promise<Shipments>;
}
