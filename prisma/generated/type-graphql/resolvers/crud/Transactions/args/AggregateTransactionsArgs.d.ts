import { TransactionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TransactionsOrderByWithRelationAndSearchRelevanceInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";
export declare class AggregateTransactionsArgs {
    where?: TransactionsWhereInput | undefined;
    orderBy?: TransactionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TransactionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
