import { GraphQLResolveInfo } from "graphql";
import { DeleteOneMessagesArgs } from "./args/DeleteOneMessagesArgs";
import { Messages } from "../../../models/Messages";
export declare class DeleteOneMessagesResolver {
    deleteOneMessages(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMessagesArgs): Promise<Messages | null>;
}
