import { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationsArgs } from "./args/AggregateIntegrationsArgs";
import { AggregateIntegrations } from "../../outputs/AggregateIntegrations";
export declare class AggregateIntegrationsResolver {
    aggregateIntegrations(ctx: any, info: GraphQLResolveInfo, args: AggregateIntegrationsArgs): Promise<AggregateIntegrations>;
}
