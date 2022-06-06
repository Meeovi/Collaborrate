import { GraphQLResolveInfo } from "graphql";
import { UpdateWebsitesArgs } from "./args/UpdateWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class UpdateWebsitesResolver {
    updateWebsites(ctx: any, info: GraphQLResolveInfo, args: UpdateWebsitesArgs): Promise<Websites | null>;
}
