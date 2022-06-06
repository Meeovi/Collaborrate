import { Customer_groupOrderByWithRelationInput } from "../../../inputs/Customer_groupOrderByWithRelationInput";
import { Customer_groupWhereInput } from "../../../inputs/Customer_groupWhereInput";
import { Customer_groupWhereUniqueInput } from "../../../inputs/Customer_groupWhereUniqueInput";
export declare class CustomersCustomer_group_customer_groupTocustomersArgs {
    where?: Customer_groupWhereInput | undefined;
    orderBy?: Customer_groupOrderByWithRelationInput[] | undefined;
    cursor?: Customer_groupWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "tax_class" | "cust_id"> | undefined;
}
