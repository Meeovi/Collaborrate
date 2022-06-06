import { GraphQLResolveInfo } from "graphql";
import { FindUniqueArticlesArgs } from "./args/FindUniqueArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class FindUniqueArticlesResolver {
    findUniqueArticles(ctx: any, info: GraphQLResolveInfo, args: FindUniqueArticlesArgs): Promise<Articles | null>;
}
