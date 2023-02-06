import { GraphQLResolveInfo } from "graphql";
import { CreateManyManufacturerArgs } from "./args/CreateManyManufacturerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyManufacturerResolver {
    createManyManufacturer(ctx: any, info: GraphQLResolveInfo, args: CreateManyManufacturerArgs): Promise<AffectedRowsOutput>;
}
