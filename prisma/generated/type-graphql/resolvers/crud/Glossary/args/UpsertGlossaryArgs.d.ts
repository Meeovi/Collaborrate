import { GlossaryCreateInput } from "../../../inputs/GlossaryCreateInput";
import { GlossaryUpdateInput } from "../../../inputs/GlossaryUpdateInput";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";
export declare class UpsertGlossaryArgs {
    where: GlossaryWhereUniqueInput;
    create: GlossaryCreateInput;
    update: GlossaryUpdateInput;
}
