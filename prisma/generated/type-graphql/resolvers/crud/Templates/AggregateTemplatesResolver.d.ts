import type { GraphQLResolveInfo } from "graphql";
import { AggregateTemplatesArgs } from "./args/AggregateTemplatesArgs";
import { AggregateTemplates } from "../../outputs/AggregateTemplates";
export declare class AggregateTemplatesResolver {
    aggregateTemplates(ctx: any, info: GraphQLResolveInfo, args: AggregateTemplatesArgs): Promise<AggregateTemplates>;
}
