import { GraphQLResolveInfo } from "graphql";
import { DeleteOneArticlesArgs } from "./args/DeleteOneArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class DeleteOneArticlesResolver {
    deleteOneArticles(ctx: any, info: GraphQLResolveInfo, args: DeleteOneArticlesArgs): Promise<Articles | null>;
}
