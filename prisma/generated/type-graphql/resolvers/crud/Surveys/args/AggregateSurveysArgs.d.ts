import { SurveysOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SurveysOrderByWithRelationAndSearchRelevanceInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";
export declare class AggregateSurveysArgs {
    where?: SurveysWhereInput | undefined;
    orderBy?: SurveysOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SurveysWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
