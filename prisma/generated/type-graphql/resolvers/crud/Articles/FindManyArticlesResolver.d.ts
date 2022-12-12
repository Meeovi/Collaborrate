import { GraphQLResolveInfo } from "graphql";
import { FindManyArticlesArgs } from "./args/FindManyArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class FindManyArticlesResolver {
    findManyArticles(ctx: any, info: GraphQLResolveInfo, args: FindManyArticlesArgs): Promise<Articles[]>;
}
