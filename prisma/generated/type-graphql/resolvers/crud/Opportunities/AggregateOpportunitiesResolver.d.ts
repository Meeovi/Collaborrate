import { GraphQLResolveInfo } from "graphql";
import { AggregateOpportunitiesArgs } from "./args/AggregateOpportunitiesArgs";
import { AggregateOpportunities } from "../../outputs/AggregateOpportunities";
export declare class AggregateOpportunitiesResolver {
    aggregateOpportunities(ctx: any, info: GraphQLResolveInfo, args: AggregateOpportunitiesArgs): Promise<AggregateOpportunities>;
}
