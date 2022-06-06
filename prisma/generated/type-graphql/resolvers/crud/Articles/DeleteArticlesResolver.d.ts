import { GraphQLResolveInfo } from "graphql";
import { DeleteArticlesArgs } from "./args/DeleteArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class DeleteArticlesResolver {
    deleteArticles(ctx: any, info: GraphQLResolveInfo, args: DeleteArticlesArgs): Promise<Articles | null>;
}
