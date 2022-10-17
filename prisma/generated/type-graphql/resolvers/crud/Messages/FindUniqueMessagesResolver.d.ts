import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMessagesArgs } from "./args/FindUniqueMessagesArgs";
import { Messages } from "../../../models/Messages";
export declare class FindUniqueMessagesResolver {
    findUniqueMessages(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMessagesArgs): Promise<Messages | null>;
}
