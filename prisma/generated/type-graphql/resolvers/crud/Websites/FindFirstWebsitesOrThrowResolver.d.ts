import { GraphQLResolveInfo } from "graphql";
import { FindFirstWebsitesOrThrowArgs } from "./args/FindFirstWebsitesOrThrowArgs";
import { Websites } from "../../../models/Websites";
export declare class FindFirstWebsitesOrThrowResolver {
    findFirstWebsitesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWebsitesOrThrowArgs): Promise<Websites | null>;
}
