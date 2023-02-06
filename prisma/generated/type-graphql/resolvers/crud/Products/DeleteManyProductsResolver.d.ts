import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProductsArgs } from "./args/DeleteManyProductsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProductsResolver {
    deleteManyProducts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProductsArgs): Promise<AffectedRowsOutput>;
}
