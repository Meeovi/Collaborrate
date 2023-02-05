import { GraphQLResolveInfo } from "graphql";
import { FindUniqueShipmentsOrThrowArgs } from "./args/FindUniqueShipmentsOrThrowArgs";
import { Shipments } from "../../../models/Shipments";
export declare class FindUniqueShipmentsOrThrowResolver {
    findUniqueShipmentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShipmentsOrThrowArgs): Promise<Shipments | null>;
}
