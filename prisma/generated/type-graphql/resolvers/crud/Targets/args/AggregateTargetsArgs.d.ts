import { TargetsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TargetsOrderByWithRelationAndSearchRelevanceInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";
export declare class AggregateTargetsArgs {
    where?: TargetsWhereInput | undefined;
    orderBy?: TargetsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TargetsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
