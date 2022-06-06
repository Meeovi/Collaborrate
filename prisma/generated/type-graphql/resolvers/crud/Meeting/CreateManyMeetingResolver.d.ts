import { GraphQLResolveInfo } from "graphql";
import { CreateManyMeetingArgs } from "./args/CreateManyMeetingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMeetingResolver {
    createManyMeeting(ctx: any, info: GraphQLResolveInfo, args: CreateManyMeetingArgs): Promise<AffectedRowsOutput>;
}
