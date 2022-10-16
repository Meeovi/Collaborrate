import { GraphQLResolveInfo } from "graphql";
import { DeleteOneManufacturerArgs } from "./args/DeleteOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class DeleteOneManufacturerResolver {
    deleteOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: DeleteOneManufacturerArgs): Promise<Manufacturer | null>;
}
