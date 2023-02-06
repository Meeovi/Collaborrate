import { GraphQLResolveInfo } from "graphql";
import { AggregateCitiesArgs } from "./args/AggregateCitiesArgs";
import { AggregateCities } from "../../outputs/AggregateCities";
export declare class AggregateCitiesResolver {
    aggregateCities(ctx: any, info: GraphQLResolveInfo, args: AggregateCitiesArgs): Promise<AggregateCities>;
}
