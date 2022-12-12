import { ReviewsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReviewsOrderByWithRelationAndSearchRelevanceInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";
export declare class AggregateReviewsArgs {
    where?: ReviewsWhereInput | undefined;
    orderBy?: ReviewsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ReviewsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
