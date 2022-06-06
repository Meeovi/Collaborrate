import { CommentsCreateInput } from "../../../inputs/CommentsCreateInput";
import { CommentsUpdateInput } from "../../../inputs/CommentsUpdateInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";
export declare class UpsertCommentsArgs {
    where: CommentsWhereUniqueInput;
    create: CommentsCreateInput;
    update: CommentsUpdateInput;
}
