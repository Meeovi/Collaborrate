import { GraphQLResolveInfo } from "graphql";
import { AggregateMeetingArgs } from "./args/AggregateMeetingArgs";
import { AggregateMeeting } from "../../outputs/AggregateMeeting";
export declare class AggregateMeetingResolver {
    aggregateMeeting(ctx: any, info: GraphQLResolveInfo, args: AggregateMeetingArgs): Promise<AggregateMeeting>;
}
