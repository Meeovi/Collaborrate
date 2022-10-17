import { StatisticsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StatisticsOrderByWithRelationAndSearchRelevanceInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";
export declare class AggregateStatisticsArgs {
    where?: StatisticsWhereInput | undefined;
    orderBy?: StatisticsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: StatisticsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
