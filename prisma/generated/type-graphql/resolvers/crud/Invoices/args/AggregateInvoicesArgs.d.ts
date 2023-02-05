import { InvoicesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/InvoicesOrderByWithRelationAndSearchRelevanceInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";
export declare class AggregateInvoicesArgs {
    where?: InvoicesWhereInput | undefined;
    orderBy?: InvoicesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: InvoicesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
