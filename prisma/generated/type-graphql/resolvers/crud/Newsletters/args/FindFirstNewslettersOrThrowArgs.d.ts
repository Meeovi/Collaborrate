import { NewslettersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/NewslettersOrderByWithRelationAndSearchRelevanceInput";
import { NewslettersWhereInput } from "../../../inputs/NewslettersWhereInput";
import { NewslettersWhereUniqueInput } from "../../../inputs/NewslettersWhereUniqueInput";
export declare class FindFirstNewslettersOrThrowArgs {
    where?: NewslettersWhereInput | undefined;
    orderBy?: NewslettersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: NewslettersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id" | "customers"> | undefined;
}
