import { WarehouseOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WarehouseOrderByWithRelationAndSearchRelevanceInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";
export declare class AggregateWarehouseArgs {
    where?: WarehouseWhereInput | undefined;
    orderBy?: WarehouseOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WarehouseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
