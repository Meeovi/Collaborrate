import { GraphQLResolveInfo } from "graphql";
import { FindUniqueManufacturerArgs } from "./args/FindUniqueManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class FindUniqueManufacturerResolver {
    manufacturer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueManufacturerArgs): Promise<Manufacturer | null>;
}
