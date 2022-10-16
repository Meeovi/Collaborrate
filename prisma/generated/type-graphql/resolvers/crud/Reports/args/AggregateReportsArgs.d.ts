import { ReportsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReportsOrderByWithRelationAndSearchRelevanceInput";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";
import { ReportsWhereUniqueInput } from "../../../inputs/ReportsWhereUniqueInput";
export declare class AggregateReportsArgs {
    where?: ReportsWhereInput | undefined;
    orderBy?: ReportsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ReportsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
