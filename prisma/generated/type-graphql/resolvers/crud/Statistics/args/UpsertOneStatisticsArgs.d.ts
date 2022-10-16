import { StatisticsCreateInput } from "../../../inputs/StatisticsCreateInput";
import { StatisticsUpdateInput } from "../../../inputs/StatisticsUpdateInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";
export declare class UpsertOneStatisticsArgs {
    where: StatisticsWhereUniqueInput;
    create: StatisticsCreateInput;
    update: StatisticsUpdateInput;
}
