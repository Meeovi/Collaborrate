import { StocksOrderByWithRelationInput } from "../../../inputs/StocksOrderByWithRelationInput";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";
export declare class FindFirstStocksArgs {
    where?: StocksWhereInput | undefined;
    orderBy?: StocksOrderByWithRelationInput[] | undefined;
    cursor?: StocksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "enabled" | "description" | "website" | "sources"> | undefined;
}
