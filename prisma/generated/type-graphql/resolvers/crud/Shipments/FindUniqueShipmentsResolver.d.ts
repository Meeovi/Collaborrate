import { GraphQLResolveInfo } from "graphql";
import { FindUniqueShipmentsArgs } from "./args/FindUniqueShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
export declare class FindUniqueShipmentsResolver {
    findUniqueShipments(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShipmentsArgs): Promise<Shipments | null>;
}
