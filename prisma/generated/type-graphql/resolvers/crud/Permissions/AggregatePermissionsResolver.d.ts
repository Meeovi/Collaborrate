import { GraphQLResolveInfo } from "graphql";
import { AggregatePermissionsArgs } from "./args/AggregatePermissionsArgs";
import { AggregatePermissions } from "../../outputs/AggregatePermissions";
export declare class AggregatePermissionsResolver {
    aggregatePermissions(ctx: any, info: GraphQLResolveInfo, args: AggregatePermissionsArgs): Promise<AggregatePermissions>;
}
