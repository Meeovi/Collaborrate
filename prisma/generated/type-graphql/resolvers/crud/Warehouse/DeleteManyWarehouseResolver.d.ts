import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWarehouseArgs } from "./args/DeleteManyWarehouseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWarehouseResolver {
    deleteManyWarehouse(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWarehouseArgs): Promise<AffectedRowsOutput>;
}
