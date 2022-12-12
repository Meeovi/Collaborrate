import { OotoOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OotoOrderByWithRelationAndSearchRelevanceInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";
export declare class AggregateOotoArgs {
    where?: OotoWhereInput | undefined;
    orderBy?: OotoOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: OotoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
