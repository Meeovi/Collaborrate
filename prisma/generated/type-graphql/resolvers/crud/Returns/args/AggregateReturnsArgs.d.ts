import { ReturnsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReturnsOrderByWithRelationAndSearchRelevanceInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";
export declare class AggregateReturnsArgs {
    where?: ReturnsWhereInput | undefined;
    orderBy?: ReturnsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ReturnsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
