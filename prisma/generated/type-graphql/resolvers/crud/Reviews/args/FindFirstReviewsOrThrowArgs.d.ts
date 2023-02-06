import { ReviewsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReviewsOrderByWithRelationAndSearchRelevanceInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";
export declare class FindFirstReviewsOrThrowArgs {
    where?: ReviewsWhereInput | undefined;
    orderBy?: ReviewsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ReviewsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "first_name" | "last_name" | "content" | "websites" | "created_at"> | undefined;
}
