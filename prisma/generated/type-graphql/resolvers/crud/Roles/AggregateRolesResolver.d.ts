import { GraphQLResolveInfo } from "graphql";
import { AggregateRolesArgs } from "./args/AggregateRolesArgs";
import { AggregateRoles } from "../../outputs/AggregateRoles";
export declare class AggregateRolesResolver {
    aggregateRoles(ctx: any, info: GraphQLResolveInfo, args: AggregateRolesArgs): Promise<AggregateRoles>;
}
