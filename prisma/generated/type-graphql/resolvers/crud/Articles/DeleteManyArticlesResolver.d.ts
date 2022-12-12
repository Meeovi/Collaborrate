import { GraphQLResolveInfo } from "graphql";
import { DeleteManyArticlesArgs } from "./args/DeleteManyArticlesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyArticlesResolver {
    deleteManyArticles(ctx: any, info: GraphQLResolveInfo, args: DeleteManyArticlesArgs): Promise<AffectedRowsOutput>;
}
