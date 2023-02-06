import { GraphQLResolveInfo } from "graphql";
import { AggregateInternalizationArgs } from "./args/AggregateInternalizationArgs";
import { AggregateInternalization } from "../../outputs/AggregateInternalization";
export declare class AggregateInternalizationResolver {
    aggregateInternalization(ctx: any, info: GraphQLResolveInfo, args: AggregateInternalizationArgs): Promise<AggregateInternalization>;
}
