import { MessagesCreateInput } from "../../../inputs/MessagesCreateInput";
import { MessagesUpdateInput } from "../../../inputs/MessagesUpdateInput";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";
export declare class UpsertOneMessagesArgs {
    where: MessagesWhereUniqueInput;
    create: MessagesCreateInput;
    update: MessagesUpdateInput;
}
