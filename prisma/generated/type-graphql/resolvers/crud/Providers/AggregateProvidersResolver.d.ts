import { GraphQLResolveInfo } from "graphql";
import { AggregateProvidersArgs } from "./args/AggregateProvidersArgs";
import { AggregateProviders } from "../../outputs/AggregateProviders";
export declare class AggregateProvidersResolver {
    aggregateProviders(ctx: any, info: GraphQLResolveInfo, args: AggregateProvidersArgs): Promise<AggregateProviders>;
}
