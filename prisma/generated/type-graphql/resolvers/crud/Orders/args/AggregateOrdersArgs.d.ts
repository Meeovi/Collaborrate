import { OrdersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OrdersOrderByWithRelationAndSearchRelevanceInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";
export declare class AggregateOrdersArgs {
    where?: OrdersWhereInput | undefined;
    orderBy?: OrdersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: OrdersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
