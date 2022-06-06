import { GraphQLResolveInfo } from "graphql";
import { UpsertArticlesArgs } from "./args/UpsertArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class UpsertArticlesResolver {
    upsertArticles(ctx: any, info: GraphQLResolveInfo, args: UpsertArticlesArgs): Promise<Articles>;
}
