import { GraphQLResolveInfo } from "graphql";
import { UpdateShipmentsArgs } from "./args/UpdateShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class UpdateShipmentsResolver {
    updateShipments(ctx: any, info: GraphQLResolveInfo, args: UpdateShipmentsArgs): Promise<Shipments | null>;
}
