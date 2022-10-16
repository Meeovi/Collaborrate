import { GraphQLResolveInfo } from "graphql";
import { UpdateOneMessagesArgs } from "./args/UpdateOneMessagesArgs";
import { Messages } from "../../../models/Messages";
export declare class UpdateOneMessagesResolver {
    updateOneMessages(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMessagesArgs): Promise<Messages | null>;
}
