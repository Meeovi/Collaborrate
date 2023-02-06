import { GraphQLResolveInfo } from "graphql";
import { GroupByIntegrationsArgs } from "./args/GroupByIntegrationsArgs";
import { IntegrationsGroupBy } from "../../outputs/IntegrationsGroupBy";
export declare class GroupByIntegrationsResolver {
    groupByIntegrations(ctx: any, info: GraphQLResolveInfo, args: GroupByIntegrationsArgs): Promise<IntegrationsGroupBy[]>;
}
