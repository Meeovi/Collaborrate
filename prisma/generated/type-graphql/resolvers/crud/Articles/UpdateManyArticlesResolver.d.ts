import { GraphQLResolveInfo } from "graphql";
import { UpdateManyArticlesArgs } from "./args/UpdateManyArticlesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyArticlesResolver {
    updateManyArticles(ctx: any, info: GraphQLResolveInfo, args: UpdateManyArticlesArgs): Promise<AffectedRowsOutput>;
}
