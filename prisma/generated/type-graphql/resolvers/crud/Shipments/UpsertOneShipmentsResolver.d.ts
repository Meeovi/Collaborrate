import { GraphQLResolveInfo } from "graphql";
import { UpsertOneShipmentsArgs } from "./args/UpsertOneShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class UpsertOneShipmentsResolver {
    upsertOneShipments(ctx: any, info: GraphQLResolveInfo, args: UpsertOneShipmentsArgs): Promise<Shipments>;
}
