import { GraphQLResolveInfo } from "graphql";
import { AggregateLeadsArgs } from "./args/AggregateLeadsArgs";
import { AggregateLeads } from "../../outputs/AggregateLeads";
export declare class AggregateLeadsResolver {
    aggregateLeads(ctx: any, info: GraphQLResolveInfo, args: AggregateLeadsArgs): Promise<AggregateLeads>;
}
