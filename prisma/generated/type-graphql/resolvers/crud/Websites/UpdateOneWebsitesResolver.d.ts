import { GraphQLResolveInfo } from "graphql";
import { UpdateOneWebsitesArgs } from "./args/UpdateOneWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class UpdateOneWebsitesResolver {
    updateOneWebsites(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWebsitesArgs): Promise<Websites | null>;
}
