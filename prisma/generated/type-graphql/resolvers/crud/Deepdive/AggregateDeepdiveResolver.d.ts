import { GraphQLResolveInfo } from "graphql";
import { AggregateDeepdiveArgs } from "./args/AggregateDeepdiveArgs";
import { AggregateDeepdive } from "../../outputs/AggregateDeepdive";
export declare class AggregateDeepdiveResolver {
    aggregateDeepdive(ctx: any, info: GraphQLResolveInfo, args: AggregateDeepdiveArgs): Promise<AggregateDeepdive>;
}
