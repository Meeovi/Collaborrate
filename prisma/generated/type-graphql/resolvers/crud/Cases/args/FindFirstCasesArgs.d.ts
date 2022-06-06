import { CasesOrderByWithRelationInput } from "../../../inputs/CasesOrderByWithRelationInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";
export declare class FindFirstCasesArgs {
    where?: CasesWhereInput | undefined;
    orderBy?: CasesOrderByWithRelationInput[] | undefined;
    cursor?: CasesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "case_number" | "state" | "type" | "subject" | "description" | "resolution" | "priority" | "status" | "account_name" | "assigned_to" | "date_modified"> | undefined;
}
