import { GraphQLResolveInfo } from "graphql";
import { CreateOneMessagesArgs } from "./args/CreateOneMessagesArgs";
import { Messages } from "../../../models/Messages";
export declare class CreateOneMessagesResolver {
    createOneMessages(ctx: any, info: GraphQLResolveInfo, args: CreateOneMessagesArgs): Promise<Messages>;
}
