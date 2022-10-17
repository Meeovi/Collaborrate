import { Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Catalog_price_ruleWhereInput } from "../../../inputs/Catalog_price_ruleWhereInput";
import { Catalog_price_ruleWhereUniqueInput } from "../../../inputs/Catalog_price_ruleWhereUniqueInput";
export declare class FindManyCatalog_price_ruleArgs {
    where?: Catalog_price_ruleWhereInput | undefined;
    orderBy?: Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Catalog_price_ruleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "rule" | "description" | "active" | "customer_groups" | "priority" | "start_date" | "end_date" | "status" | "website" | "actions_apply" | "actions_discount_amount" | "actions_discard_subsequent_rules"> | undefined;
}
