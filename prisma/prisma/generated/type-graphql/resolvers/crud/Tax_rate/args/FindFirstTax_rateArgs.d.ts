import { Tax_rateOrderByWithRelationInput } from "../../../inputs/Tax_rateOrderByWithRelationInput";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";
import { Tax_rateWhereUniqueInput } from "../../../inputs/Tax_rateWhereUniqueInput";
export declare class FindFirstTax_rateArgs {
    where?: Tax_rateWhereInput | undefined;
    orderBy?: Tax_rateOrderByWithRelationInput[] | undefined;
    cursor?: Tax_rateWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tax_identifier" | "zip_post_is_range" | "postcode" | "state" | "country" | "rate_percent" | "default_store_view" | "prod_id"> | undefined;
}
