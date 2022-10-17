import { GraphQLResolveInfo } from "graphql";
import { UpsertOneArticlesArgs } from "./args/UpsertOneArticlesArgs";
import { Articles } from "../../../models/Articles";
export declare class UpsertOneArticlesResolver {
    upsertOneArticles(ctx: any, info: GraphQLResolveInfo, args: UpsertOneArticlesArgs): Promise<Articles>;
}
