import { GraphQLResolveInfo } from "graphql";
import { UpsertOneManufacturerArgs } from "./args/UpsertOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class UpsertOneManufacturerResolver {
    upsertOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: UpsertOneManufacturerArgs): Promise<Manufacturer>;
}
