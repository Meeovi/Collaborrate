import { TrainingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TrainingsOrderByWithRelationAndSearchRelevanceInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";
export declare class AggregateTrainingsArgs {
    where?: TrainingsWhereInput | undefined;
    orderBy?: TrainingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TrainingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
