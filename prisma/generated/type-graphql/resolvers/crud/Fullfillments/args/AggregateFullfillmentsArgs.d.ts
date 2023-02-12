import { FullfillmentsOrderByWithRelationInput } from "../../../inputs/FullfillmentsOrderByWithRelationInput";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";
import { FullfillmentsWhereUniqueInput } from "../../../inputs/FullfillmentsWhereUniqueInput";
export declare class AggregateFullfillmentsArgs {
    where?: FullfillmentsWhereInput | undefined;
    orderBy?: FullfillmentsOrderByWithRelationInput[] | undefined;
    cursor?: FullfillmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
