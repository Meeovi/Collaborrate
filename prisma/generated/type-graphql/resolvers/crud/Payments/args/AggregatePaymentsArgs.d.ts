import { PaymentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PaymentsOrderByWithRelationAndSearchRelevanceInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";
export declare class AggregatePaymentsArgs {
    where?: PaymentsWhereInput | undefined;
    orderBy?: PaymentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PaymentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
