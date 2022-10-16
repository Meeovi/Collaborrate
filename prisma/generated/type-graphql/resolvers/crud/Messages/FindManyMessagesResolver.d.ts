import { GraphQLResolveInfo } from "graphql";
import { FindManyMessagesArgs } from "./args/FindManyMessagesArgs";
import { Messages } from "../../../models/Messages";
export declare class FindManyMessagesResolver {
    findManyMessages(ctx: any, info: GraphQLResolveInfo, args: FindManyMessagesArgs): Promise<Messages[]>;
}
