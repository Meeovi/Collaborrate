import { GraphQLResolveInfo } from "graphql";
import { DeleteOneShipmentsArgs } from "./args/DeleteOneShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class DeleteOneShipmentsResolver {
    deleteOneShipments(ctx: any, info: GraphQLResolveInfo, args: DeleteOneShipmentsArgs): Promise<Shipments | null>;
}
