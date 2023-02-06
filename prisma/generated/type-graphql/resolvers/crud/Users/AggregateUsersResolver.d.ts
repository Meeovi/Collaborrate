import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersArgs } from "./args/AggregateUsersArgs";
import { AggregateUsers } from "../../outputs/AggregateUsers";
export declare class AggregateUsersResolver {
    aggregateUsers(ctx: any, info: GraphQLResolveInfo, args: AggregateUsersArgs): Promise<AggregateUsers>;
}
