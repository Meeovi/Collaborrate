import { GraphQLResolveInfo } from "graphql";
import { CreateManyArticlesArgs } from "./args/CreateManyArticlesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyArticlesResolver {
    createManyArticles(ctx: any, info: GraphQLResolveInfo, args: CreateManyArticlesArgs): Promise<AffectedRowsOutput>;
}
