import { GraphQLResolveInfo } from "graphql";
import { UpdateManyManufacturerArgs } from "./args/UpdateManyManufacturerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyManufacturerResolver {
    updateManyManufacturer(ctx: any, info: GraphQLResolveInfo, args: UpdateManyManufacturerArgs): Promise<AffectedRowsOutput>;
}
