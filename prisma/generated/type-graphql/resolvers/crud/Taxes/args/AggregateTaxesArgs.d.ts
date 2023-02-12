import { TaxesOrderByWithRelationInput } from "../../../inputs/TaxesOrderByWithRelationInput";
import { TaxesWhereInput } from "../../../inputs/TaxesWhereInput";
import { TaxesWhereUniqueInput } from "../../../inputs/TaxesWhereUniqueInput";
export declare class AggregateTaxesArgs {
    where?: TaxesWhereInput | undefined;
    orderBy?: TaxesOrderByWithRelationInput[] | undefined;
    cursor?: TaxesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
