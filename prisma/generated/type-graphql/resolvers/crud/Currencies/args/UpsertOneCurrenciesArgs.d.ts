import { CurrenciesCreateInput } from "../../../inputs/CurrenciesCreateInput";
import { CurrenciesUpdateInput } from "../../../inputs/CurrenciesUpdateInput";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";
export declare class UpsertOneCurrenciesArgs {
    where: CurrenciesWhereUniqueInput;
    create: CurrenciesCreateInput;
    update: CurrenciesUpdateInput;
}
