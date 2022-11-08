import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWarehouseArgs } from "./args/UpdateManyWarehouseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWarehouseResolver {
    updateManyWarehouse(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWarehouseArgs): Promise<AffectedRowsOutput>;
}
