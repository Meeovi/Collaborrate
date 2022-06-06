import { WarehouseOrderByWithRelationInput } from "../../../inputs/WarehouseOrderByWithRelationInput";
import { WarehouseWhereInput } from "../../../inputs/WarehouseWhereInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";
export declare class AggregateWarehouseArgs {
    where?: WarehouseWhereInput | undefined;
    orderBy?: WarehouseOrderByWithRelationInput[] | undefined;
    cursor?: WarehouseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
