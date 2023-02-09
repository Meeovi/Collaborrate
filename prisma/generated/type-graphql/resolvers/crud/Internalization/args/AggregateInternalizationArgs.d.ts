import { InternalizationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/InternalizationOrderByWithRelationAndSearchRelevanceInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";
export declare class AggregateInternalizationArgs {
    where?: InternalizationWhereInput | undefined;
    orderBy?: InternalizationOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: InternalizationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
