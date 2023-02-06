import { GraphQLResolveInfo } from "graphql";
import { CreateManyProductsArgs } from "./args/CreateManyProductsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProductsResolver {
    createManyProducts(ctx: any, info: GraphQLResolveInfo, args: CreateManyProductsArgs): Promise<AffectedRowsOutput>;
}
