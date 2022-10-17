import { CasesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CasesOrderByWithRelationAndSearchRelevanceInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";
export declare class AggregateCasesArgs {
    where?: CasesWhereInput | undefined;
    orderBy?: CasesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CasesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
