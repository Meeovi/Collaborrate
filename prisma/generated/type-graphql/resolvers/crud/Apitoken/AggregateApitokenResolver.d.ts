import { GraphQLResolveInfo } from "graphql";
import { AggregateApitokenArgs } from "./args/AggregateApitokenArgs";
import { AggregateApitoken } from "../../outputs/AggregateApitoken";
export declare class AggregateApitokenResolver {
    aggregateApitoken(ctx: any, info: GraphQLResolveInfo, args: AggregateApitokenArgs): Promise<AggregateApitoken>;
}
