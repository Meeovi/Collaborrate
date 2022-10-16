import { GraphQLResolveInfo } from "graphql";
import { DeleteOneMeetingArgs } from "./args/DeleteOneMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class DeleteOneMeetingResolver {
    deleteOneMeeting(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMeetingArgs): Promise<Meeting | null>;
}
