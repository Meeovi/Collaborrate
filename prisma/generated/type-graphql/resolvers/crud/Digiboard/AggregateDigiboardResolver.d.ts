import { GraphQLResolveInfo } from "graphql";
import { AggregateDigiboardArgs } from "./args/AggregateDigiboardArgs";
import { AggregateDigiboard } from "../../outputs/AggregateDigiboard";
export declare class AggregateDigiboardResolver {
    aggregateDigiboard(ctx: any, info: GraphQLResolveInfo, args: AggregateDigiboardArgs): Promise<AggregateDigiboard>;
}
