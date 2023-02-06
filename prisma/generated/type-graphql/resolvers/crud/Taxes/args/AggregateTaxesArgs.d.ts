import { TaxesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TaxesOrderByWithRelationAndSearchRelevanceInput";
import { TaxesWhereInput } from "../../../inputs/TaxesWhereInput";
import { TaxesWhereUniqueInput } from "../../../inputs/TaxesWhereUniqueInput";
export declare class AggregateTaxesArgs {
    where?: TaxesWhereInput | undefined;
    orderBy?: TaxesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TaxesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
