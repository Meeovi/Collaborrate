import { GraphQLResolveInfo } from "graphql";
import { AggregateRoleArgs } from "./args/AggregateRoleArgs";
import { AggregateRole } from "../../outputs/AggregateRole";
export declare class AggregateRoleResolver {
    aggregateRole(ctx: any, info: GraphQLResolveInfo, args: AggregateRoleArgs): Promise<AggregateRole>;
}
