export declare class OrdersCreateInput {
    purchase_point?: number | undefined;
    purchase_date?: Date | undefined;
    bill_to_name: string;
    ship_to_name?: string | undefined;
    grand_total_base?: number | undefined;
    grand_total_purchased?: number | undefined;
    status?: boolean | undefined;
    action?: boolean | undefined;
    allocated_sources?: string | undefined;
    braintree_transaction_source?: string | undefined;
    cust_id: number;
    prod_id: bigint;
    customers?: string | undefined;
    products?: string | undefined;
    quotes?: string | undefined;
    transactions?: string | undefined;
}
