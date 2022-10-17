import { AccountsOrderByRelevanceInput } from "../inputs/AccountsOrderByRelevanceInput";
export declare class AccountsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    office_phone?: "asc" | "desc" | undefined;
    fax?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    postalcode?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    alt_address?: "asc" | "desc" | undefined;
    alt_postalcode?: "asc" | "desc" | undefined;
    alt_city?: "asc" | "desc" | undefined;
    alt_state?: "asc" | "desc" | undefined;
    alt_country?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    industry?: "asc" | "desc" | undefined;
    employees?: "asc" | "desc" | undefined;
    annual_revenue?: "asc" | "desc" | undefined;
    member_of?: "asc" | "desc" | undefined;
    campaign?: "asc" | "desc" | undefined;
    _relevance?: AccountsOrderByRelevanceInput | undefined;
}
