import { GraphQLResolveInfo } from "graphql";
import { GroupByManufacturerArgs } from "./args/GroupByManufacturerArgs";
import { ManufacturerGroupBy } from "../../outputs/ManufacturerGroupBy";
export declare class GroupByManufacturerResolver {
    groupByManufacturer(ctx: any, info: GraphQLResolveInfo, args: GroupByManufacturerArgs): Promise<ManufacturerGroupBy[]>;
}
