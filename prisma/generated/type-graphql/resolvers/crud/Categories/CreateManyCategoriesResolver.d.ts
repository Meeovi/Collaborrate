import { GraphQLResolveInfo } from "graphql";
import { CreateManyCategoriesArgs } from "./args/CreateManyCategoriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCategoriesResolver {
    createManyCategories(ctx: any, info: GraphQLResolveInfo, args: CreateManyCategoriesArgs): Promise<AffectedRowsOutput>;
}
