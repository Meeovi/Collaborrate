import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMeetingArgs } from "./args/FindUniqueMeetingArgs";
import { Meeting } from "../../../models/Meeting";
export declare class FindUniqueMeetingResolver {
    meeting(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMeetingArgs): Promise<Meeting | null>;
}
