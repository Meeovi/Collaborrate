import { GraphQLResolveInfo } from "graphql";
import { FindFirstShipmentsOrThrowArgs } from "./args/FindFirstShipmentsOrThrowArgs";
import { Shipments } from "../../../models/Shipments";
export declare class FindFirstShipmentsOrThrowResolver {
    findFirstShipmentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstShipmentsOrThrowArgs): Promise<Shipments | null>;
}
