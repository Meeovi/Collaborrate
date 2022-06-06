import { SurveysOrderByWithRelationInput } from "../../../inputs/SurveysOrderByWithRelationInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";
export declare class AggregateSurveysArgs {
    where?: SurveysWhereInput | undefined;
    orderBy?: SurveysOrderByWithRelationInput[] | undefined;
    cursor?: SurveysWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
