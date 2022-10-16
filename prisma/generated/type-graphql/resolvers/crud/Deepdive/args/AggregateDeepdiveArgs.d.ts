import { DeepdiveOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DeepdiveOrderByWithRelationAndSearchRelevanceInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";
export declare class AggregateDeepdiveArgs {
    where?: DeepdiveWhereInput | undefined;
    orderBy?: DeepdiveOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DeepdiveWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
