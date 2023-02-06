import { GraphQLResolveInfo } from "graphql";
import { AggregatePartnersArgs } from "./args/AggregatePartnersArgs";
import { AggregatePartners } from "../../outputs/AggregatePartners";
export declare class AggregatePartnersResolver {
    aggregatePartners(ctx: any, info: GraphQLResolveInfo, args: AggregatePartnersArgs): Promise<AggregatePartners>;
}
