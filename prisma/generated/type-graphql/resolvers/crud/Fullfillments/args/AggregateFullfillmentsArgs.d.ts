import { FullfillmentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/FullfillmentsOrderByWithRelationAndSearchRelevanceInput";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";
import { FullfillmentsWhereUniqueInput } from "../../../inputs/FullfillmentsWhereUniqueInput";
export declare class AggregateFullfillmentsArgs {
    where?: FullfillmentsWhereInput | undefined;
    orderBy?: FullfillmentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: FullfillmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
