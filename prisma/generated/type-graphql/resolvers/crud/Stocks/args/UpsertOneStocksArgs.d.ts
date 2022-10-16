import { StocksCreateInput } from "../../../inputs/StocksCreateInput";
import { StocksUpdateInput } from "../../../inputs/StocksUpdateInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";
export declare class UpsertOneStocksArgs {
    where: StocksWhereUniqueInput;
    create: StocksCreateInput;
    update: StocksUpdateInput;
}
