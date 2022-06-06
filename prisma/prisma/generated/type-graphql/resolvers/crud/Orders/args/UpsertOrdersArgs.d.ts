import { OrdersCreateInput } from "../../../inputs/OrdersCreateInput";
import { OrdersUpdateInput } from "../../../inputs/OrdersUpdateInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";
export declare class UpsertOrdersArgs {
    where: OrdersWhereUniqueInput;
    create: OrdersCreateInput;
    update: OrdersUpdateInput;
}
