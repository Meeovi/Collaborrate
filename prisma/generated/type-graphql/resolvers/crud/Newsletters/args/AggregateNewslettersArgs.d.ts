import { NewslettersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/NewslettersOrderByWithRelationAndSearchRelevanceInput";
import { NewslettersWhereInput } from "../../../inputs/NewslettersWhereInput";
import { NewslettersWhereUniqueInput } from "../../../inputs/NewslettersWhereUniqueInput";
export declare class AggregateNewslettersArgs {
    where?: NewslettersWhereInput | undefined;
    orderBy?: NewslettersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: NewslettersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
