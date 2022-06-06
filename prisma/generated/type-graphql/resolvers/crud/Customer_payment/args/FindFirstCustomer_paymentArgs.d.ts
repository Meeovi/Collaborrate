import { Customer_paymentOrderByWithRelationInput } from "../../../inputs/Customer_paymentOrderByWithRelationInput";
import { Customer_paymentWhereInput } from "../../../inputs/Customer_paymentWhereInput";
import { Customer_paymentWhereUniqueInput } from "../../../inputs/Customer_paymentWhereUniqueInput";
export declare class FindFirstCustomer_paymentArgs {
    where?: Customer_paymentWhereInput | undefined;
    orderBy?: Customer_paymentOrderByWithRelationInput[] | undefined;
    cursor?: Customer_paymentWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "cust_id" | "payment_info" | "provider" | "account_no" | "expiry"> | undefined;
}
