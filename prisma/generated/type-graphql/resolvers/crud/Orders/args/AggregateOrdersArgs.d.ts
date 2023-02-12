import { OrdersOrderByWithRelationInput } from "../../../inputs/OrdersOrderByWithRelationInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";
export declare class AggregateOrdersArgs {
    where?: OrdersWhereInput | undefined;
    orderBy?: OrdersOrderByWithRelationInput[] | undefined;
    cursor?: OrdersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
