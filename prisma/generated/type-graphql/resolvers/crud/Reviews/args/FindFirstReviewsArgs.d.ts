import { ReviewsOrderByWithRelationInput } from "../../../inputs/ReviewsOrderByWithRelationInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";
export declare class FindFirstReviewsArgs {
    where?: ReviewsWhereInput | undefined;
    orderBy?: ReviewsOrderByWithRelationInput[] | undefined;
    cursor?: ReviewsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "first_name" | "last_name" | "content" | "websites" | "created_at"> | undefined;
}
