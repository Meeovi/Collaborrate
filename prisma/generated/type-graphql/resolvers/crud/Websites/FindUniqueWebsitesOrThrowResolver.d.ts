import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWebsitesOrThrowArgs } from "./args/FindUniqueWebsitesOrThrowArgs";
import { Websites } from "../../../models/Websites";
export declare class FindUniqueWebsitesOrThrowResolver {
    findUniqueWebsitesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWebsitesOrThrowArgs): Promise<Websites | null>;
}
