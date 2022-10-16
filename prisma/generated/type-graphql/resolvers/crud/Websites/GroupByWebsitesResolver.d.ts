import { GraphQLResolveInfo } from "graphql";
import { GroupByWebsitesArgs } from "./args/GroupByWebsitesArgs";
import { WebsitesGroupBy } from "../../outputs/WebsitesGroupBy";
export declare class GroupByWebsitesResolver {
    groupByWebsites(ctx: any, info: GraphQLResolveInfo, args: GroupByWebsitesArgs): Promise<WebsitesGroupBy[]>;
}
