import { GraphQLResolveInfo } from "graphql";
import { CreateWebsitesArgs } from "./args/CreateWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class CreateWebsitesResolver {
    createWebsites(ctx: any, info: GraphQLResolveInfo, args: CreateWebsitesArgs): Promise<Websites>;
}
