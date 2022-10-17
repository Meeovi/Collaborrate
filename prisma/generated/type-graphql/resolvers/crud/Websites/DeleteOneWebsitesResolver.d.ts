import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWebsitesArgs } from "./args/DeleteOneWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class DeleteOneWebsitesResolver {
    deleteOneWebsites(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWebsitesArgs): Promise<Websites | null>;
}
