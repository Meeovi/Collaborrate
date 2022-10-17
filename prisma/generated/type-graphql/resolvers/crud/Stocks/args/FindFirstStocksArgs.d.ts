import { StocksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StocksOrderByWithRelationAndSearchRelevanceInput";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";
export declare class FindFirstStocksArgs {
    where?: StocksWhereInput | undefined;
    orderBy?: StocksOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: StocksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "enabled" | "description" | "website" | "sources"> | undefined;
}
