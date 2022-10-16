import { Tax_rateAvgAggregate } from "../outputs/Tax_rateAvgAggregate";
import { Tax_rateCountAggregate } from "../outputs/Tax_rateCountAggregate";
import { Tax_rateMaxAggregate } from "../outputs/Tax_rateMaxAggregate";
import { Tax_rateMinAggregate } from "../outputs/Tax_rateMinAggregate";
import { Tax_rateSumAggregate } from "../outputs/Tax_rateSumAggregate";
export declare class Tax_rateGroupBy {
    id: number;
    tax_identifier: string;
    zip_post_is_range: boolean | null;
    postcode: string | null;
    state: string | null;
    country: string | null;
    rate_percent: string | null;
    default_store_view: string | null;
    prod_id: bigint;
    products: string | null;
    _count: Tax_rateCountAggregate | null;
    _avg: Tax_rateAvgAggregate | null;
    _sum: Tax_rateSumAggregate | null;
    _min: Tax_rateMinAggregate | null;
    _max: Tax_rateMaxAggregate | null;
}
