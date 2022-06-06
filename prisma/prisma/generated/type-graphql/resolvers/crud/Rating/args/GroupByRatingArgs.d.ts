import { RatingOrderByWithAggregationInput } from "../../../inputs/RatingOrderByWithAggregationInput";
import { RatingScalarWhereWithAggregatesInput } from "../../../inputs/RatingScalarWhereWithAggregatesInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";
export declare class GroupByRatingArgs {
    where?: RatingWhereInput | undefined;
    orderBy?: RatingOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "default_value" | "default_store_view" | "rating_visibility" | "active" | "sort_order" | "prod_id">;
    having?: RatingScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
