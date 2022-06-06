import { ReportsOrderByWithRelationInput } from "../../../inputs/ReportsOrderByWithRelationInput";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";
import { ReportsWhereUniqueInput } from "../../../inputs/ReportsWhereUniqueInput";
export declare class AggregateReportsArgs {
    where?: ReportsWhereInput | undefined;
    orderBy?: ReportsOrderByWithRelationInput[] | undefined;
    cursor?: ReportsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
