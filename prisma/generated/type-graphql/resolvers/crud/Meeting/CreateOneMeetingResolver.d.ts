import { GraphQLResolveInfo } from "graphql";
import { CreateOneMeetingArgs } from "./args/CreateOneMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class CreateOneMeetingResolver {
    createOneMeeting(ctx: any, info: GraphQLResolveInfo, args: CreateOneMeetingArgs): Promise<Meeting>;
}
