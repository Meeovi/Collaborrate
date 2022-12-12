import { GraphQLResolveInfo } from "graphql";
import { AggregateManufacturerArgs } from "./args/AggregateManufacturerArgs";
import { AggregateManufacturer } from "../../outputs/AggregateManufacturer";
export declare class AggregateManufacturerResolver {
    aggregateManufacturer(ctx: any, info: GraphQLResolveInfo, args: AggregateManufacturerArgs): Promise<AggregateManufacturer>;
}
