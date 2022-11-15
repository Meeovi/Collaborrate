import { GraphQLResolveInfo } from "graphql";
import { FindUniqueArticlesOrThrowArgs } from "./args/FindUniqueArticlesOrThrowArgs";
import { Articles } from "../../../models/Articles";
export declare class FindUniqueArticlesOrThrowResolver {
    findUniqueArticlesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueArticlesOrThrowArgs): Promise<Articles | null>;
}
