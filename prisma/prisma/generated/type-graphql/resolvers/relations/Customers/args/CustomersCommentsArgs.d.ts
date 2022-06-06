import { CommentsOrderByWithRelationInput } from "../../../inputs/CommentsOrderByWithRelationInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";
export declare class CustomersCommentsArgs {
    where?: CommentsWhereInput | undefined;
    orderBy?: CommentsOrderByWithRelationInput[] | undefined;
    cursor?: CommentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "customer_name" | "description" | "image" | "response" | "published" | "cust_id"> | undefined;
}
