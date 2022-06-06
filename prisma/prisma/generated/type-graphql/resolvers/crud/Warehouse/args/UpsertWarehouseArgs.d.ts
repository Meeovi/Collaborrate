import { WarehouseCreateInput } from "../../../inputs/WarehouseCreateInput";
import { WarehouseUpdateInput } from "../../../inputs/WarehouseUpdateInput";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";
export declare class UpsertWarehouseArgs {
    where: WarehouseWhereUniqueInput;
    create: WarehouseCreateInput;
    update: WarehouseUpdateInput;
}
