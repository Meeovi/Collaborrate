import { TransactionsOrderByWithRelationInput } from "../../../inputs/TransactionsOrderByWithRelationInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";
export declare class AggregateTransactionsArgs {
    where?: TransactionsWhereInput | undefined;
    orderBy?: TransactionsOrderByWithRelationInput[] | undefined;
    cursor?: TransactionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
