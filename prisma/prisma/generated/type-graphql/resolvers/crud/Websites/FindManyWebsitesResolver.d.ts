import { GraphQLResolveInfo } from "graphql";
import { FindManyWebsitesArgs } from "./args/FindManyWebsitesArgs";
import { Websites } from "../../../models/Websites";
export declare class FindManyWebsitesResolver {
    findManyWebsites(ctx: any, info: GraphQLResolveInfo, args: FindManyWebsitesArgs): Promise<Websites[]>;
}
