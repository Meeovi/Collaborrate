import { CasesOrderByWithAggregationInput } from "../../../inputs/CasesOrderByWithAggregationInput";
import { CasesScalarWhereWithAggregatesInput } from "../../../inputs/CasesScalarWhereWithAggregatesInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
export declare class GroupByCasesArgs {
    where?: CasesWhereInput | undefined;
    orderBy?: CasesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "case_number" | "state" | "type" | "subject" | "description" | "resolution" | "priority" | "status" | "account_name" | "assigned_to" | "date_modified">;
    having?: CasesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
