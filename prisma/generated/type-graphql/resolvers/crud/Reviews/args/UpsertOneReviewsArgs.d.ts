import { ReviewsCreateInput } from "../../../inputs/ReviewsCreateInput";
import { ReviewsUpdateInput } from "../../../inputs/ReviewsUpdateInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";
export declare class UpsertOneReviewsArgs {
    where: ReviewsWhereUniqueInput;
    create: ReviewsCreateInput;
    update: ReviewsUpdateInput;
}
