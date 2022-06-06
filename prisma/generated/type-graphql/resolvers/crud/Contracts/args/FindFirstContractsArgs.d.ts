import { ContractsOrderByWithRelationInput } from "../../../inputs/ContractsOrderByWithRelationInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";
export declare class FindFirstContractsArgs {
    where?: ContractsWhereInput | undefined;
    orderBy?: ContractsOrderByWithRelationInput[] | undefined;
    cursor?: ContractsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "contract_title" | "contract_value" | "start_date" | "end_date" | "renewal_reminder" | "customer_signed_date" | "company_signed_date" | "status" | "contract_manager" | "account" | "contact" | "description" | "opportunity" | "contract_type" | "currency" | "line_items" | "total" | "discount" | "subtotal" | "shipping" | "shipping_tax" | "tax" | "grand_total" | "created_at"> | undefined;
}
