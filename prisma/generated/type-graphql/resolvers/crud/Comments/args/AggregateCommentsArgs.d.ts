import { CommentsOrderByWithRelationInput } from "../../../inputs/CommentsOrderByWithRelationInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";
export declare class AggregateCommentsArgs {
    where?: CommentsWhereInput | undefined;
    orderBy?: CommentsOrderByWithRelationInput[] | undefined;
    cursor?: CommentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
