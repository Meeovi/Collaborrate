import { CasesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CasesOrderByWithRelationAndSearchRelevanceInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";
export declare class FindFirstCasesArgs {
    where?: CasesWhereInput | undefined;
    orderBy?: CasesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CasesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "case_number" | "state" | "type" | "subject" | "description" | "resolution" | "priority" | "status" | "account_name" | "assigned_to" | "date_modified"> | undefined;
}
