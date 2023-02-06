import { QuotesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/QuotesOrderByWithRelationAndSearchRelevanceInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";
export declare class AggregateQuotesArgs {
    where?: QuotesWhereInput | undefined;
    orderBy?: QuotesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: QuotesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
