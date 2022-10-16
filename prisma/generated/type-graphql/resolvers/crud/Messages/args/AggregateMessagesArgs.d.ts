import { MessagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MessagesOrderByWithRelationAndSearchRelevanceInput";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";
export declare class AggregateMessagesArgs {
    where?: MessagesWhereInput | undefined;
    orderBy?: MessagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: MessagesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
