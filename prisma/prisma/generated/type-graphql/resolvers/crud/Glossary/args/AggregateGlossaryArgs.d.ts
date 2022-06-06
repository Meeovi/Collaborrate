import { GlossaryOrderByWithRelationInput } from "../../../inputs/GlossaryOrderByWithRelationInput";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";
export declare class AggregateGlossaryArgs {
    where?: GlossaryWhereInput | undefined;
    orderBy?: GlossaryOrderByWithRelationInput[] | undefined;
    cursor?: GlossaryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
