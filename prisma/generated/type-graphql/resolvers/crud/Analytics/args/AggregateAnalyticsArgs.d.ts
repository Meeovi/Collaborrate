import { AnalyticsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AnalyticsOrderByWithRelationAndSearchRelevanceInput";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";
import { AnalyticsWhereUniqueInput } from "../../../inputs/AnalyticsWhereUniqueInput";
export declare class AggregateAnalyticsArgs {
    where?: AnalyticsWhereInput | undefined;
    orderBy?: AnalyticsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AnalyticsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
