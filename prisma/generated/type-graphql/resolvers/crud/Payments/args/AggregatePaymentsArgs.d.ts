import { PaymentsOrderByWithRelationInput } from "../../../inputs/PaymentsOrderByWithRelationInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";
export declare class AggregatePaymentsArgs {
    where?: PaymentsWhereInput | undefined;
    orderBy?: PaymentsOrderByWithRelationInput[] | undefined;
    cursor?: PaymentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
