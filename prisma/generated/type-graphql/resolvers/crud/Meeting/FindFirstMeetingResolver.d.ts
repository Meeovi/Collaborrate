import { GraphQLResolveInfo } from "graphql";
import { FindFirstMeetingArgs } from "./args/FindFirstMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class FindFirstMeetingResolver {
    findFirstMeeting(ctx: any, info: GraphQLResolveInfo, args: FindFirstMeetingArgs): Promise<Meeting | null>;
}
