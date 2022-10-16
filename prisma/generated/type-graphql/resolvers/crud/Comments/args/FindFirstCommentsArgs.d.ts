import { CommentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CommentsOrderByWithRelationAndSearchRelevanceInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";
export declare class FindFirstCommentsArgs {
    where?: CommentsWhereInput | undefined;
    orderBy?: CommentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CommentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "customer_name" | "description" | "image" | "response" | "published" | "cust_id" | "customers" | "mediamanager" | "trainings"> | undefined;
}
