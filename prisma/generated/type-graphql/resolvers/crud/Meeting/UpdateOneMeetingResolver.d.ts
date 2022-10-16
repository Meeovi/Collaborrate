import { GraphQLResolveInfo } from "graphql";
import { UpdateOneMeetingArgs } from "./args/UpdateOneMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class UpdateOneMeetingResolver {
    updateOneMeeting(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMeetingArgs): Promise<Meeting | null>;
}
