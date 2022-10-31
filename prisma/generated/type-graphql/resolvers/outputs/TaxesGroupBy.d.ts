import { TaxesAvgAggregate } from "../outputs/TaxesAvgAggregate";
import { TaxesCountAggregate } from "../outputs/TaxesCountAggregate";
import { TaxesMaxAggregate } from "../outputs/TaxesMaxAggregate";
import { TaxesMinAggregate } from "../outputs/TaxesMinAggregate";
import { TaxesSumAggregate } from "../outputs/TaxesSumAggregate";
export declare class TaxesGroupBy {
    id: number;
    tax_identifier: string;
    postcode: string | null;
    state: string | null;
    country: string | null;
    rate_percent: string | null;
    taxDefault: string | null;
    products: string | null;
    taxRuleName: string | null;
    taxCategory: string | null;
    _count: TaxesCountAggregate | null;
    _avg: TaxesAvgAggregate | null;
    _sum: TaxesSumAggregate | null;
    _min: TaxesMinAggregate | null;
    _max: TaxesMaxAggregate | null;
}
