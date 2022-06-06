import { ReviewsOrderByWithRelationInput } from "../../../inputs/ReviewsOrderByWithRelationInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";
export declare class AggregateReviewsArgs {
    where?: ReviewsWhereInput | undefined;
    orderBy?: ReviewsOrderByWithRelationInput[] | undefined;
    cursor?: ReviewsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
