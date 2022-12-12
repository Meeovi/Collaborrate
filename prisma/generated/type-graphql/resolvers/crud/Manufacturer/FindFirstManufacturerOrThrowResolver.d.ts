import { GraphQLResolveInfo } from "graphql";
import { FindFirstManufacturerOrThrowArgs } from "./args/FindFirstManufacturerOrThrowArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class FindFirstManufacturerOrThrowResolver {
    findFirstManufacturerOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstManufacturerOrThrowArgs): Promise<Manufacturer | null>;
}
