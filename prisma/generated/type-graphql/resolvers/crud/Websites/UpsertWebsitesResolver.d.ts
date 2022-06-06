import { GraphQLResolveInfo } from "graphql";
import { UpsertWebsitesArgs } from "./args/UpsertWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class UpsertWebsitesResolver {
    upsertWebsites(ctx: any, info: GraphQLResolveInfo, args: UpsertWebsitesArgs): Promise<Websites>;
}
