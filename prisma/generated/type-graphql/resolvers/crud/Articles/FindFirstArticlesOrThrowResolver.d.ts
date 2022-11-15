import { GraphQLResolveInfo } from "graphql";
import { FindFirstArticlesOrThrowArgs } from "./args/FindFirstArticlesOrThrowArgs";
import { Articles } from "../../../models/Articles";
export declare class FindFirstArticlesOrThrowResolver {
    findFirstArticlesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstArticlesOrThrowArgs): Promise<Articles | null>;
}
