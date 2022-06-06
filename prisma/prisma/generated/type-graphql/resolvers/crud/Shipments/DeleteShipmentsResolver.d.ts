import { GraphQLResolveInfo } from "graphql";
import { DeleteShipmentsArgs } from "./args/DeleteShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class DeleteShipmentsResolver {
    deleteShipments(ctx: any, info: GraphQLResolveInfo, args: DeleteShipmentsArgs): Promise<Shipments | null>;
}
