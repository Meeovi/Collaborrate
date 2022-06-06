import { GraphQLResolveInfo } from "graphql";
import { UpdateArticlesArgs } from "./args/UpdateArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class UpdateArticlesResolver {
    updateArticles(ctx: any, info: GraphQLResolveInfo, args: UpdateArticlesArgs): Promise<Articles | null>;
}
