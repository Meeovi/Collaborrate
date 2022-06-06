import { Currency_symbolsOrderByWithAggregationInput } from "../../../inputs/Currency_symbolsOrderByWithAggregationInput";
import { Currency_symbolsScalarWhereWithAggregatesInput } from "../../../inputs/Currency_symbolsScalarWhereWithAggregatesInput";
import { Currency_symbolsWhereInput } from "../../../inputs/Currency_symbolsWhereInput";
export declare class GroupByCurrency_symbolsArgs {
    where?: Currency_symbolsWhereInput | undefined;
    orderBy?: Currency_symbolsOrderByWithAggregationInput[] | undefined;
    by: Array<"symbol" | "use_standard">;
    having?: Currency_symbolsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
