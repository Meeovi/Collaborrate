import { CurrenciesOrderByWithAggregationInput } from "../../../inputs/CurrenciesOrderByWithAggregationInput";
import { CurrenciesScalarWhereWithAggregatesInput } from "../../../inputs/CurrenciesScalarWhereWithAggregatesInput";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";
export declare class GroupByCurrenciesArgs {
    where?: CurrenciesWhereInput | undefined;
    orderBy?: CurrenciesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "code" | "name" | "region">;
    having?: CurrenciesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
