import { GraphQLResolveInfo } from "graphql";
import { GroupByMeetingArgs } from "./args/GroupByMeetingArgs";
import { MeetingGroupBy } from "../../outputs/MeetingGroupBy";
export declare class GroupByMeetingResolver {
    groupByMeeting(ctx: any, info: GraphQLResolveInfo, args: GroupByMeetingArgs): Promise<MeetingGroupBy[]>;
}
