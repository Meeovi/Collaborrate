import { TaxesOrderByWithRelationInput } from "../../../inputs/TaxesOrderByWithRelationInput";
import { TaxesWhereInput } from "../../../inputs/TaxesWhereInput";
import { TaxesWhereUniqueInput } from "../../../inputs/TaxesWhereUniqueInput";
export declare class FindManyTaxesArgs {
    where?: TaxesWhereInput | undefined;
    orderBy?: TaxesOrderByWithRelationInput[] | undefined;
    cursor?: TaxesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tax_identifier" | "postcode" | "state" | "country" | "rate_percent" | "taxDefault" | "products" | "taxRuleName" | "taxCategory"> | undefined;
}
