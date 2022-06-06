import { CasesCreateInput } from "../../../inputs/CasesCreateInput";
import { CasesUpdateInput } from "../../../inputs/CasesUpdateInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";
export declare class UpsertCasesArgs {
    where: CasesWhereUniqueInput;
    create: CasesCreateInput;
    update: CasesUpdateInput;
}
