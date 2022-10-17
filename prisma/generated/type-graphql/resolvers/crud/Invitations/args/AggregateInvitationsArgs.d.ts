import { InvitationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/InvitationsOrderByWithRelationAndSearchRelevanceInput";
import { InvitationsWhereInput } from "../../../inputs/InvitationsWhereInput";
import { InvitationsWhereUniqueInput } from "../../../inputs/InvitationsWhereUniqueInput";
export declare class AggregateInvitationsArgs {
    where?: InvitationsWhereInput | undefined;
    orderBy?: InvitationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: InvitationsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
