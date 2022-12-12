import { GraphQLResolveInfo } from "graphql";
import { AggregateVisitsArgs } from "./args/AggregateVisitsArgs";
import { AggregateVisits } from "../../outputs/AggregateVisits";
export declare class AggregateVisitsResolver {
    aggregateVisits(ctx: any, info: GraphQLResolveInfo, args: AggregateVisitsArgs): Promise<AggregateVisits>;
}
