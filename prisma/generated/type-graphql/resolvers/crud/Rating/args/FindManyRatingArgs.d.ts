import { RatingOrderByWithRelationInput } from "../../../inputs/RatingOrderByWithRelationInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";
export declare class FindManyRatingArgs {
    where?: RatingWhereInput | undefined;
    orderBy?: RatingOrderByWithRelationInput[] | undefined;
    cursor?: RatingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "default_value" | "default_store_view" | "rating_visibility" | "active" | "sort_order" | "prod_id"> | undefined;
}
