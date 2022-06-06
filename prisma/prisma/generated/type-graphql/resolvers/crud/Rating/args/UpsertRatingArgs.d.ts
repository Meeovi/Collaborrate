import { RatingCreateInput } from "../../../inputs/RatingCreateInput";
import { RatingUpdateInput } from "../../../inputs/RatingUpdateInput";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";
export declare class UpsertRatingArgs {
    where: RatingWhereUniqueInput;
    create: RatingCreateInput;
    update: RatingUpdateInput;
}
