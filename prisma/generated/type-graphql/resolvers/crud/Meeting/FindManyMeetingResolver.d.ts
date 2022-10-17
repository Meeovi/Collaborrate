import { GraphQLResolveInfo } from "graphql";
import { FindManyMeetingArgs } from "./args/FindManyMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class FindManyMeetingResolver {
    meetings(ctx: any, info: GraphQLResolveInfo, args: FindManyMeetingArgs): Promise<Meeting[]>;
}
