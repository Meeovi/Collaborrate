import { GraphQLResolveInfo } from "graphql";
import { DeleteManyManufacturerArgs } from "./args/DeleteManyManufacturerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyManufacturerResolver {
    deleteManyManufacturer(ctx: any, info: GraphQLResolveInfo, args: DeleteManyManufacturerArgs): Promise<AffectedRowsOutput>;
}
