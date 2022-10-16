import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBrandsArgs } from "./args/UpdateManyBrandsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBrandsResolver {
    updateManyBrands(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBrandsArgs): Promise<AffectedRowsOutput>;
}
