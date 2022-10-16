import { ReportsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReportsOrderByWithRelationAndSearchRelevanceInput";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";
import { ReportsWhereUniqueInput } from "../../../inputs/ReportsWhereUniqueInput";
export declare class FindFirstReportsArgs {
    where?: ReportsWhereInput | undefined;
    orderBy?: ReportsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ReportsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "customer" | "email" | "products" | "quantity" | "subtotal" | "applied_coupon" | "created" | "updated" | "ip_address"> | undefined;
}
