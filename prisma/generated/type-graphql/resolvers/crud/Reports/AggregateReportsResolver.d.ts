import { GraphQLResolveInfo } from "graphql";
import { AggregateReportsArgs } from "./args/AggregateReportsArgs";
import { AggregateReports } from "../../outputs/AggregateReports";
export declare class AggregateReportsResolver {
    aggregateReports(ctx: any, info: GraphQLResolveInfo, args: AggregateReportsArgs): Promise<AggregateReports>;
}
