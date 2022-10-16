import { GraphQLResolveInfo } from "graphql";
import { UpsertOneMessagesArgs } from "./args/UpsertOneMessagesArgs";
import { Messages } from "../../../models/Messages";
export declare class UpsertOneMessagesResolver {
    upsertOneMessages(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMessagesArgs): Promise<Messages>;
}
