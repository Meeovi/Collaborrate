import { RatingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RatingOrderByWithRelationAndSearchRelevanceInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";
export declare class AggregateRatingArgs {
    where?: RatingWhereInput | undefined;
    orderBy?: RatingOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: RatingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
