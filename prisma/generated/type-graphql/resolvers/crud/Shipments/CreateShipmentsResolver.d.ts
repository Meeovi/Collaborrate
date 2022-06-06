import { GraphQLResolveInfo } from "graphql";
import { CreateShipmentsArgs } from "./args/CreateShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class CreateShipmentsResolver {
    createShipments(ctx: any, info: GraphQLResolveInfo, args: CreateShipmentsArgs): Promise<Shipments>;
}
