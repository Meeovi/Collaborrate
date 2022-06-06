import { AccountsCreateInput } from "../../../inputs/AccountsCreateInput";
import { AccountsUpdateInput } from "../../../inputs/AccountsUpdateInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";
export declare class UpsertAccountsArgs {
    where: AccountsWhereUniqueInput;
    create: AccountsCreateInput;
    update: AccountsUpdateInput;
}
