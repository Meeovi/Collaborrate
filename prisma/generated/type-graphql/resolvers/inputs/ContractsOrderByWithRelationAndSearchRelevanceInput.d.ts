import { ContractsOrderByRelevanceInput } from "../inputs/ContractsOrderByRelevanceInput";
export declare class ContractsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    contract_title?: "asc" | "desc" | undefined;
    contract_value?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    renewal_reminder?: "asc" | "desc" | undefined;
    customer_signed_date?: "asc" | "desc" | undefined;
    company_signed_date?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    contract_manager?: "asc" | "desc" | undefined;
    account?: "asc" | "desc" | undefined;
    contact?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    opportunity?: "asc" | "desc" | undefined;
    contract_type?: "asc" | "desc" | undefined;
    currency?: "asc" | "desc" | undefined;
    line_items?: "asc" | "desc" | undefined;
    total?: "asc" | "desc" | undefined;
    discount?: "asc" | "desc" | undefined;
    subtotal?: "asc" | "desc" | undefined;
    shipping?: "asc" | "desc" | undefined;
    shipping_tax?: "asc" | "desc" | undefined;
    tax?: "asc" | "desc" | undefined;
    grand_total?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _relevance?: ContractsOrderByRelevanceInput | undefined;
}
