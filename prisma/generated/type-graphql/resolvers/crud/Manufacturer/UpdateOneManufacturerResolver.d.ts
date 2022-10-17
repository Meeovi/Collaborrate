import { GraphQLResolveInfo } from "graphql";
import { UpdateOneManufacturerArgs } from "./args/UpdateOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class UpdateOneManufacturerResolver {
    updateOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: UpdateOneManufacturerArgs): Promise<Manufacturer | null>;
}
