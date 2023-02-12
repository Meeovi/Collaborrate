import { InvoicesOrderByWithRelationInput } from "../../../inputs/InvoicesOrderByWithRelationInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";
export declare class FindManyInvoicesArgs {
    where?: InvoicesWhereInput | undefined;
    orderBy?: InvoicesOrderByWithRelationInput[] | undefined;
    cursor?: InvoicesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"invoice" | "order_number" | "invoice_date" | "bill_to_name" | "billing_address" | "grand_total_base" | "grand_total_purchased" | "status" | "shipping_address" | "customer_name" | "email" | "customer_group" | "payment_method" | "shipping_information" | "subtotal" | "shipping_and_handling" | "id"> | undefined;
}
