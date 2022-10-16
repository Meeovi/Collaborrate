import { CommentsOrderByWithAggregationInput } from "../../../inputs/CommentsOrderByWithAggregationInput";
import { CommentsScalarWhereWithAggregatesInput } from "../../../inputs/CommentsScalarWhereWithAggregatesInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
export declare class GroupByCommentsArgs {
    where?: CommentsWhereInput | undefined;
    orderBy?: CommentsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "customer_name" | "description" | "image" | "response" | "published" | "cust_id" | "customers" | "mediamanager" | "trainings">;
    having?: CommentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
