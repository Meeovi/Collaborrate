import { StocksOrderByWithAggregationInput } from "../../../inputs/StocksOrderByWithAggregationInput";
import { StocksScalarWhereWithAggregatesInput } from "../../../inputs/StocksScalarWhereWithAggregatesInput";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";
export declare class GroupByStocksArgs {
    where?: StocksWhereInput | undefined;
    orderBy?: StocksOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "enabled" | "description" | "website" | "sources">;
    having?: StocksScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
