import { GraphQLResolveInfo } from "graphql";
import { AggregateWebsitesArgs } from "./args/AggregateWebsitesArgs";
import { AggregateWebsites } from "../../outputs/AggregateWebsites";
export declare class AggregateWebsitesResolver {
    aggregateWebsites(ctx: any, info: GraphQLResolveInfo, args: AggregateWebsitesArgs): Promise<AggregateWebsites>;
}
