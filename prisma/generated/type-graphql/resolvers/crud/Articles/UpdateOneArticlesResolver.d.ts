import { GraphQLResolveInfo } from "graphql";
import { UpdateOneArticlesArgs } from "./args/UpdateOneArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class UpdateOneArticlesResolver {
    updateOneArticles(ctx: any, info: GraphQLResolveInfo, args: UpdateOneArticlesArgs): Promise<Articles | null>;
}
