import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMeetingArgs } from "./args/UpdateManyMeetingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMeetingResolver {
    updateManyMeeting(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMeetingArgs): Promise<AffectedRowsOutput>;
}
