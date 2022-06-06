import { GraphQLResolveInfo } from "graphql";
import { UpsertMeetingArgs } from "./args/UpsertMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class UpsertMeetingResolver {
    upsertMeeting(ctx: any, info: GraphQLResolveInfo, args: UpsertMeetingArgs): Promise<Meeting>;
}
