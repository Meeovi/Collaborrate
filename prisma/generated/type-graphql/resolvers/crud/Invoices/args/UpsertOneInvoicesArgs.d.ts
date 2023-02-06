import { InvoicesCreateInput } from "../../../inputs/InvoicesCreateInput";
import { InvoicesUpdateInput } from "../../../inputs/InvoicesUpdateInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";
export declare class UpsertOneInvoicesArgs {
    where: InvoicesWhereUniqueInput;
    create: InvoicesCreateInput;
    update: InvoicesUpdateInput;
}
