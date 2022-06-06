import { GraphQLResolveInfo } from "graphql";
import { FindFirstArticlesArgs } from "./args/FindFirstArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class FindFirstArticlesResolver {
    findFirstArticles(ctx: any, info: GraphQLResolveInfo, args: FindFirstArticlesArgs): Promise<Articles | null>;
}
