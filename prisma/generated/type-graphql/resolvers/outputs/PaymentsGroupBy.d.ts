import { PaymentsAvgAggregate } from "../outputs/PaymentsAvgAggregate";
import { PaymentsCountAggregate } from "../outputs/PaymentsCountAggregate";
import { PaymentsMaxAggregate } from "../outputs/PaymentsMaxAggregate";
import { PaymentsMinAggregate } from "../outputs/PaymentsMinAggregate";
import { PaymentsSumAggregate } from "../outputs/PaymentsSumAggregate";
export declare class PaymentsGroupBy {
    id: bigint;
    created_at: Date | null;
    client_id: string | null;
    client_secret: string | null;
    host_uri: string | null;
    redirect_url: string | null;
    redirect_url_app: string | null;
    icon: string | null;
    name: string;
    active: string | null;
    country: string | null;
    _count: PaymentsCountAggregate | null;
    _avg: PaymentsAvgAggregate | null;
    _sum: PaymentsSumAggregate | null;
    _min: PaymentsMinAggregate | null;
    _max: PaymentsMaxAggregate | null;
}
