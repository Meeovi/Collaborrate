import { GlossaryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/GlossaryOrderByWithRelationAndSearchRelevanceInput";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";
export declare class AggregateGlossaryArgs {
    where?: GlossaryWhereInput | undefined;
    orderBy?: GlossaryOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: GlossaryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
