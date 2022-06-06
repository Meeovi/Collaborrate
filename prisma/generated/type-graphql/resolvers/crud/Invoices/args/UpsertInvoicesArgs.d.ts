import { InvoicesCreateInput } from "../../../inputs/InvoicesCreateInput";
import { InvoicesUpdateInput } from "../../../inputs/InvoicesUpdateInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";
export declare class UpsertInvoicesArgs {
    where: InvoicesWhereUniqueInput;
    create: InvoicesCreateInput;
    update: InvoicesUpdateInput;
}
