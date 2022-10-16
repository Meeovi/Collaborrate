import { GraphQLResolveInfo } from "graphql";
import { UpsertOneMeetingArgs } from "./args/UpsertOneMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class UpsertOneMeetingResolver {
    upsertOneMeeting(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMeetingArgs): Promise<Meeting>;
}
