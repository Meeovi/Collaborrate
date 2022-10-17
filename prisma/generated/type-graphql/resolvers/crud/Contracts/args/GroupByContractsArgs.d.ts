import { ContractsOrderByWithAggregationInput } from "../../../inputs/ContractsOrderByWithAggregationInput";
import { ContractsScalarWhereWithAggregatesInput } from "../../../inputs/ContractsScalarWhereWithAggregatesInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";
export declare class GroupByContractsArgs {
    where?: ContractsWhereInput | undefined;
    orderBy?: ContractsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "contract_title" | "contract_value" | "start_date" | "end_date" | "renewal_reminder" | "customer_signed_date" | "company_signed_date" | "status" | "contract_manager" | "account" | "contact" | "description" | "opportunity" | "contract_type" | "currency" | "line_items" | "total" | "discount" | "subtotal" | "shipping" | "shipping_tax" | "tax" | "grand_total" | "created_at">;
    having?: ContractsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
