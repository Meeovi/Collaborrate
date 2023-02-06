import { GraphQLResolveInfo } from "graphql";
import { UpdateOneShipmentsArgs } from "./args/UpdateOneShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class UpdateOneShipmentsResolver {
    updateOneShipments(ctx: any, info: GraphQLResolveInfo, args: UpdateOneShipmentsArgs): Promise<Shipments | null>;
}
