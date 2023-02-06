import { FullfillmentsAvgAggregate } from "../outputs/FullfillmentsAvgAggregate";
import { FullfillmentsCountAggregate } from "../outputs/FullfillmentsCountAggregate";
import { FullfillmentsMaxAggregate } from "../outputs/FullfillmentsMaxAggregate";
import { FullfillmentsMinAggregate } from "../outputs/FullfillmentsMinAggregate";
import { FullfillmentsSumAggregate } from "../outputs/FullfillmentsSumAggregate";
export declare class FullfillmentsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    shipping_zones: string | null;
    company: string | null;
    address: string | null;
    address_two: string | null;
    city: string | null;
    state: string | null;
    zipcode: string | null;
    country: string | null;
    country_area: string | null;
    phone: string | null;
    pickup: string | null;
    stock: string | null;
    _count: FullfillmentsCountAggregate | null;
    _avg: FullfillmentsAvgAggregate | null;
    _sum: FullfillmentsSumAggregate | null;
    _min: FullfillmentsMinAggregate | null;
    _max: FullfillmentsMaxAggregate | null;
}
