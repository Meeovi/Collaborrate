import { GraphQLResolveInfo } from "graphql";
import { CreateOneManufacturerArgs } from "./args/CreateOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class CreateOneManufacturerResolver {
    createOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: CreateOneManufacturerArgs): Promise<Manufacturer>;
}
