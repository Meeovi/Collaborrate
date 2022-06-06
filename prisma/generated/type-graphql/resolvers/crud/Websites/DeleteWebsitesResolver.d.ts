import { GraphQLResolveInfo } from "graphql";
import { DeleteWebsitesArgs } from "./args/DeleteWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class DeleteWebsitesResolver {
    deleteWebsites(ctx: any, info: GraphQLResolveInfo, args: DeleteWebsitesArgs): Promise<Websites | null>;
}
