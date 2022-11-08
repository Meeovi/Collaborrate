import { GraphQLResolveInfo } from "graphql";
import { AggregateLogInArgs } from "./args/AggregateLogInArgs";
import { AggregateLogIn } from "../../outputs/AggregateLogIn";
export declare class AggregateLogInResolver {
    aggregateLogIn(ctx: any, info: GraphQLResolveInfo, args: AggregateLogInArgs): Promise<AggregateLogIn>;
}
