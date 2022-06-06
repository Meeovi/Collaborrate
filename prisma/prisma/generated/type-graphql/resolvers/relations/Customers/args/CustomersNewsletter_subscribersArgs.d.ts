import { Newsletter_subscribersOrderByWithRelationInput } from "../../../inputs/Newsletter_subscribersOrderByWithRelationInput";
import { Newsletter_subscribersWhereInput } from "../../../inputs/Newsletter_subscribersWhereInput";
import { Newsletter_subscribersWhereUniqueInput } from "../../../inputs/Newsletter_subscribersWhereUniqueInput";
export declare class CustomersNewsletter_subscribersArgs {
    where?: Newsletter_subscribersWhereInput | undefined;
    orderBy?: Newsletter_subscribersOrderByWithRelationInput[] | undefined;
    cursor?: Newsletter_subscribersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id"> | undefined;
}
