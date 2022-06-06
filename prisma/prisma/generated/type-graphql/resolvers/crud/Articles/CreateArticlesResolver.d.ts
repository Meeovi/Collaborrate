import { GraphQLResolveInfo } from "graphql";
import { CreateArticlesArgs } from "./args/CreateArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class CreateArticlesResolver {
    createArticles(ctx: any, info: GraphQLResolveInfo, args: CreateArticlesArgs): Promise<Articles>;
}
