import { RatingOrderByWithRelationInput } from "../../../inputs/RatingOrderByWithRelationInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";
export declare class AggregateRatingArgs {
    where?: RatingWhereInput | undefined;
    orderBy?: RatingOrderByWithRelationInput[] | undefined;
    cursor?: RatingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
