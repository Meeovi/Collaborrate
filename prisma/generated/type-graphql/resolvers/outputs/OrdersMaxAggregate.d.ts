export declare class OrdersMaxAggregate {
    id: number | null;
    purchase_point: number | null;
    purchase_date: Date | null;
    bill_to_name: string | null;
    ship_to_name: string | null;
    grand_total_base: number | null;
    grand_total_purchased: number | null;
    status: boolean | null;
    action: boolean | null;
    allocated_sources: string | null;
    braintree_transaction_source: string | null;
    cust_id: number | null;
    prod_id: bigint | null;
    customers: string | null;
    products: string | null;
    quotes: string | null;
    transactions: string | null;
}
