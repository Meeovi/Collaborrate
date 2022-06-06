import { StocksCreateInput } from "../../../inputs/StocksCreateInput";
import { StocksUpdateInput } from "../../../inputs/StocksUpdateInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";
export declare class UpsertStocksArgs {
    where: StocksWhereUniqueInput;
    create: StocksCreateInput;
    update: StocksUpdateInput;
}
