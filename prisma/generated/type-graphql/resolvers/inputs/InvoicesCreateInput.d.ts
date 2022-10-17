export declare class InvoicesCreateInput {
    invoice: number;
    order_number: bigint;
    invoice_date?: Date | undefined;
    bill_to_name: string;
    billing_address?: string | undefined;
    grand_total_base?: string | undefined;
    grand_total_purchased?: string | undefined;
    status?: string | undefined;
    shipping_address?: string | undefined;
    customer_name?: string | undefined;
    email?: string | undefined;
    customer_group?: string | undefined;
    payment_method?: string | undefined;
    shipping_information?: string | undefined;
    subtotal?: string | undefined;
    shipping_and_handling?: string | undefined;
    id?: bigint | undefined;
}
