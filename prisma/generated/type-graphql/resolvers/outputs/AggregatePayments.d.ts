import { PaymentsAvgAggregate } from "../outputs/PaymentsAvgAggregate";
import { PaymentsCountAggregate } from "../outputs/PaymentsCountAggregate";
import { PaymentsMaxAggregate } from "../outputs/PaymentsMaxAggregate";
import { PaymentsMinAggregate } from "../outputs/PaymentsMinAggregate";
import { PaymentsSumAggregate } from "../outputs/PaymentsSumAggregate";
export declare class AggregatePayments {
    _count: PaymentsCountAggregate | null;
    _avg: PaymentsAvgAggregate | null;
    _sum: PaymentsSumAggregate | null;
    _min: PaymentsMinAggregate | null;
    _max: PaymentsMaxAggregate | null;
}
