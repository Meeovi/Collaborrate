export declare class Orders {
    id: number;
    purchase_point?: number | null;
    purchase_date?: Date | null;
    bill_to_name: string;
    ship_to_name?: string | null;
    grand_total_base?: number | null;
    grand_total_purchased?: number | null;
    status?: boolean | null;
    action?: boolean | null;
    allocated_sources?: string | null;
    braintree_transaction_source?: string | null;
    cust_id: number;
    prod_id: bigint;
    customers?: string | null;
    products?: string | null;
    quotes?: string | null;
    transactions?: string | null;
}
