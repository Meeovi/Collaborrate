import { GraphQLResolveInfo } from "graphql";
import { CreateManyWarehouseArgs } from "./args/CreateManyWarehouseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWarehouseResolver {
    createManyWarehouse(ctx: any, info: GraphQLResolveInfo, args: CreateManyWarehouseArgs): Promise<AffectedRowsOutput>;
}
