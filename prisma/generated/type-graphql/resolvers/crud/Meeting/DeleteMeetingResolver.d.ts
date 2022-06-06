import { GraphQLResolveInfo } from "graphql";
import { DeleteMeetingArgs } from "./args/DeleteMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class DeleteMeetingResolver {
    deleteMeeting(ctx: any, info: GraphQLResolveInfo, args: DeleteMeetingArgs): Promise<Meeting | null>;
}
