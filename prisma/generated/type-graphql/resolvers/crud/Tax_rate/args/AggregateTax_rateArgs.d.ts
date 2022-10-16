import { Tax_rateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_rateOrderByWithRelationAndSearchRelevanceInput";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";
import { Tax_rateWhereUniqueInput } from "../../../inputs/Tax_rateWhereUniqueInput";
export declare class AggregateTax_rateArgs {
    where?: Tax_rateWhereInput | undefined;
    orderBy?: Tax_rateOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Tax_rateWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
