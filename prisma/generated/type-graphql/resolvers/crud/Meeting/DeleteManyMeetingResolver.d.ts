import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMeetingArgs } from "./args/DeleteManyMeetingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMeetingResolver {
    deleteManyMeeting(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMeetingArgs): Promise<AffectedRowsOutput>;
}
