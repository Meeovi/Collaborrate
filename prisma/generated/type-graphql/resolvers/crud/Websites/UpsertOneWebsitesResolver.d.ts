import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWebsitesArgs } from "./args/UpsertOneWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class UpsertOneWebsitesResolver {
    upsertOneWebsites(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWebsitesArgs): Promise<Websites>;
}
