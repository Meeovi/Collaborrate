import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBrandsArgs } from "./args/DeleteManyBrandsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBrandsResolver {
    deleteManyBrands(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBrandsArgs): Promise<AffectedRowsOutput>;
}
