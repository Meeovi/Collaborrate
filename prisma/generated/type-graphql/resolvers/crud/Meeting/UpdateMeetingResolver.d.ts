import { GraphQLResolveInfo } from "graphql";
import { UpdateMeetingArgs } from "./args/UpdateMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class UpdateMeetingResolver {
    updateMeeting(ctx: any, info: GraphQLResolveInfo, args: UpdateMeetingArgs): Promise<Meeting | null>;
}
