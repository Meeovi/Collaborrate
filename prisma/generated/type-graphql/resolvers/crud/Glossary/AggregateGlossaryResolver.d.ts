import { GraphQLResolveInfo } from "graphql";
import { AggregateGlossaryArgs } from "./args/AggregateGlossaryArgs";
import { AggregateGlossary } from "../../outputs/AggregateGlossary";
export declare class AggregateGlossaryResolver {
    aggregateGlossary(ctx: any, info: GraphQLResolveInfo, args: AggregateGlossaryArgs): Promise<AggregateGlossary>;
}
