import { OrdersAvgAggregate } from "../outputs/OrdersAvgAggregate";
import { OrdersCountAggregate } from "../outputs/OrdersCountAggregate";
import { OrdersMaxAggregate } from "../outputs/OrdersMaxAggregate";
import { OrdersMinAggregate } from "../outputs/OrdersMinAggregate";
import { OrdersSumAggregate } from "../outputs/OrdersSumAggregate";
export declare class AggregateOrders {
    _count: OrdersCountAggregate | null;
    _avg: OrdersAvgAggregate | null;
    _sum: OrdersSumAggregate | null;
    _min: OrdersMinAggregate | null;
    _max: OrdersMaxAggregate | null;
}
