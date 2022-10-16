import { GraphQLResolveInfo } from "graphql";
import { AggregateThemesArgs } from "./args/AggregateThemesArgs";
import { AggregateThemes } from "../../outputs/AggregateThemes";
export declare class AggregateThemesResolver {
    aggregateThemes(ctx: any, info: GraphQLResolveInfo, args: AggregateThemesArgs): Promise<AggregateThemes>;
}
