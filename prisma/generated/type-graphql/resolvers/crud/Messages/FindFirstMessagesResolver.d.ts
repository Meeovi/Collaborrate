import { GraphQLResolveInfo } from "graphql";
import { FindFirstMessagesArgs } from "./args/FindFirstMessagesArgs";
import { Messages } from "../../../models/Messages";
export declare class FindFirstMessagesResolver {
    findFirstMessages(ctx: any, info: GraphQLResolveInfo, args: FindFirstMessagesArgs): Promise<Messages | null>;
}
