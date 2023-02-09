import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingsArgs } from "./args/AggregateSettingsArgs";
import { AggregateSettings } from "../../outputs/AggregateSettings";
export declare class AggregateSettingsResolver {
    aggregateSettings(ctx: any, info: GraphQLResolveInfo, args: AggregateSettingsArgs): Promise<AggregateSettings>;
}
