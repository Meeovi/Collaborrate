import { GraphQLResolveInfo } from "graphql";
import { CreateMeetingArgs } from "./args/CreateMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class CreateMeetingResolver {
    createMeeting(ctx: any, info: GraphQLResolveInfo, args: CreateMeetingArgs): Promise<Meeting>;
}
