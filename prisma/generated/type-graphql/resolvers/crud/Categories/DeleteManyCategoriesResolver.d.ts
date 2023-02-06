import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCategoriesArgs } from "./args/DeleteManyCategoriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCategoriesResolver {
    deleteManyCategories(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCategoriesArgs): Promise<AffectedRowsOutput>;
}
