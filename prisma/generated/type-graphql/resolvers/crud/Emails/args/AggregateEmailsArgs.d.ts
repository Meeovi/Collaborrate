import { EmailsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EmailsOrderByWithRelationAndSearchRelevanceInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";
export declare class AggregateEmailsArgs {
    where?: EmailsWhereInput | undefined;
    orderBy?: EmailsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: EmailsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
