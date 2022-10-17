import { Tax_categoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_categoryOrderByWithRelationAndSearchRelevanceInput";
import { Tax_categoryWhereInput } from "../../../inputs/Tax_categoryWhereInput";
import { Tax_categoryWhereUniqueInput } from "../../../inputs/Tax_categoryWhereUniqueInput";
export declare class AggregateTax_categoryArgs {
    where?: Tax_categoryWhereInput | undefined;
    orderBy?: Tax_categoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Tax_categoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
