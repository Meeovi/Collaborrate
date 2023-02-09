import { TaxesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TaxesOrderByWithRelationAndSearchRelevanceInput";
import { TaxesWhereInput } from "../../../inputs/TaxesWhereInput";
import { TaxesWhereUniqueInput } from "../../../inputs/TaxesWhereUniqueInput";
export declare class FindFirstTaxesOrThrowArgs {
    where?: TaxesWhereInput | undefined;
    orderBy?: TaxesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TaxesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tax_identifier" | "postcode" | "state" | "country" | "rate_percent" | "taxDefault" | "products" | "taxRuleName" | "taxCategory"> | undefined;
}
