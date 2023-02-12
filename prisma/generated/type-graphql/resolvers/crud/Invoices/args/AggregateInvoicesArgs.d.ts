import { InvoicesOrderByWithRelationInput } from "../../../inputs/InvoicesOrderByWithRelationInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";
export declare class AggregateInvoicesArgs {
    where?: InvoicesWhereInput | undefined;
    orderBy?: InvoicesOrderByWithRelationInput[] | undefined;
    cursor?: InvoicesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
