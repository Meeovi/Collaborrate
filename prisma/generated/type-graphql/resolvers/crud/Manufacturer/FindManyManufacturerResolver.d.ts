import { GraphQLResolveInfo } from "graphql";
import { FindManyManufacturerArgs } from "./args/FindManyManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
export declare class FindManyManufacturerResolver {
    manufacturers(ctx: any, info: GraphQLResolveInfo, args: FindManyManufacturerArgs): Promise<Manufacturer[]>;
}
