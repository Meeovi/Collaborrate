import { GraphQLResolveInfo } from "graphql";
import { CreateOneShipmentsArgs } from "./args/CreateOneShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class CreateOneShipmentsResolver {
    createOneShipments(ctx: any, info: GraphQLResolveInfo, args: CreateOneShipmentsArgs): Promise<Shipments>;
}
