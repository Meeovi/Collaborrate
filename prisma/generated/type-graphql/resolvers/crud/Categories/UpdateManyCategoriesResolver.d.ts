import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCategoriesArgs } from "./args/UpdateManyCategoriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCategoriesResolver {
    updateManyCategories(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCategoriesArgs): Promise<AffectedRowsOutput>;
}
