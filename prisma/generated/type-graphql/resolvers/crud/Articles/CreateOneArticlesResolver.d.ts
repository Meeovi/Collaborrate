import { GraphQLResolveInfo } from "graphql";
import { CreateOneArticlesArgs } from "./args/CreateOneArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class CreateOneArticlesResolver {
    createOneArticles(ctx: any, info: GraphQLResolveInfo, args: CreateOneArticlesArgs): Promise<Articles>;
}
