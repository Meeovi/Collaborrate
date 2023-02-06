import { GraphQLResolveInfo } from "graphql";
import { FindFirstManufacturerArgs } from "./args/FindFirstManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class FindFirstManufacturerResolver {
    findFirstManufacturer(ctx: any, info: GraphQLResolveInfo, args: FindFirstManufacturerArgs): Promise<Manufacturer | null>;
}
