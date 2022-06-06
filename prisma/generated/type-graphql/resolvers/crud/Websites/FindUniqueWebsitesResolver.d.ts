import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWebsitesArgs } from "./args/FindUniqueWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class FindUniqueWebsitesResolver {
    findUniqueWebsites(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWebsitesArgs): Promise<Websites | null>;
}
