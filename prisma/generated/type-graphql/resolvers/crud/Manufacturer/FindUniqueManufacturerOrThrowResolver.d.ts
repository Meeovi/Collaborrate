import { GraphQLResolveInfo } from "graphql";
import { FindUniqueManufacturerOrThrowArgs } from "./args/FindUniqueManufacturerOrThrowArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class FindUniqueManufacturerOrThrowResolver {
    getManufacturer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueManufacturerOrThrowArgs): Promise<Manufacturer | null>;
}
