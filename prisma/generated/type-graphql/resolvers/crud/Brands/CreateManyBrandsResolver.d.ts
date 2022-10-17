import { GraphQLResolveInfo } from "graphql";
import { CreateManyBrandsArgs } from "./args/CreateManyBrandsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBrandsResolver {
    createManyBrands(ctx: any, info: GraphQLResolveInfo, args: CreateManyBrandsArgs): Promise<AffectedRowsOutput>;
}
