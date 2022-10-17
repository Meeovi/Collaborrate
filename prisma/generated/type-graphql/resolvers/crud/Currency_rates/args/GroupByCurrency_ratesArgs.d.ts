import { Currency_ratesOrderByWithAggregationInput } from "../../../inputs/Currency_ratesOrderByWithAggregationInput";
import { Currency_ratesScalarWhereWithAggregatesInput } from "../../../inputs/Currency_ratesScalarWhereWithAggregatesInput";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";
export declare class GroupByCurrency_ratesArgs {
    where?: Currency_ratesWhereInput | undefined;
    orderBy?: Currency_ratesOrderByWithAggregationInput[] | undefined;
    by: Array<"import_service" | "usd" | "id">;
    having?: Currency_ratesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
