import { TransactionsCreateInput } from "../../../inputs/TransactionsCreateInput";
import { TransactionsUpdateInput } from "../../../inputs/TransactionsUpdateInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";
export declare class UpsertTransactionsArgs {
    where: TransactionsWhereUniqueInput;
    create: TransactionsCreateInput;
    update: TransactionsUpdateInput;
}
