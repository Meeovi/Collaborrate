import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProductsArgs } from "./args/UpdateManyProductsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProductsResolver {
    updateManyProducts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProductsArgs): Promise<AffectedRowsOutput>;
}
