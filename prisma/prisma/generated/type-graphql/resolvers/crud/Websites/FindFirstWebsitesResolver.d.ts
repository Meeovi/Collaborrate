import { GraphQLResolveInfo } from "graphql";
import { FindFirstWebsitesArgs } from "./args/FindFirstWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class FindFirstWebsitesResolver {
    findFirstWebsites(ctx: any, info: GraphQLResolveInfo, args: FindFirstWebsitesArgs): Promise<Websites | null>;
}
