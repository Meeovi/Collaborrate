import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomizationsArgs } from "./args/AggregateCustomizationsArgs";
import { AggregateCustomizations } from "../../outputs/AggregateCustomizations";
export declare class AggregateCustomizationsResolver {
    aggregateCustomizations(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomizationsArgs): Promise<AggregateCustomizations>;
}
