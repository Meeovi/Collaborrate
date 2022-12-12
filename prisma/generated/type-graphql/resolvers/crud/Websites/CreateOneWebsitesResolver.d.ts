import { GraphQLResolveInfo } from "graphql";
import { CreateOneWebsitesArgs } from "./args/CreateOneWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class CreateOneWebsitesResolver {
    createOneWebsites(ctx: any, info: GraphQLResolveInfo, args: CreateOneWebsitesArgs): Promise<Websites>;
}
