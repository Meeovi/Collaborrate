import { StatisticsOrderByWithRelationInput } from "../../../inputs/StatisticsOrderByWithRelationInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";
export declare class AggregateStatisticsArgs {
    where?: StatisticsWhereInput | undefined;
    orderBy?: StatisticsOrderByWithRelationInput[] | undefined;
    cursor?: StatisticsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
