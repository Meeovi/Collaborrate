import { CasesOrderByWithRelationInput } from "../../../inputs/CasesOrderByWithRelationInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";
export declare class AggregateCasesArgs {
    where?: CasesWhereInput | undefined;
    orderBy?: CasesOrderByWithRelationInput[] | undefined;
    cursor?: CasesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
