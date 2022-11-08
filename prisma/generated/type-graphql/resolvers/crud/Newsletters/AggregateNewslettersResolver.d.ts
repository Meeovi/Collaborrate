import { GraphQLResolveInfo } from "graphql";
import { AggregateNewslettersArgs } from "./args/AggregateNewslettersArgs";
import { AggregateNewsletters } from "../../outputs/AggregateNewsletters";
export declare class AggregateNewslettersResolver {
    aggregateNewsletters(ctx: any, info: GraphQLResolveInfo, args: AggregateNewslettersArgs): Promise<AggregateNewsletters>;
}
