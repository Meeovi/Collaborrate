import { GraphQLResolveInfo } from "graphql";
import { GroupByProvidersArgs } from "./args/GroupByProvidersArgs";
import { ProvidersGroupBy } from "../../outputs/ProvidersGroupBy";
export declare class GroupByProvidersResolver {
    groupByProviders(ctx: any, info: GraphQLResolveInfo, args: GroupByProvidersArgs): Promise<ProvidersGroupBy[]>;
}
