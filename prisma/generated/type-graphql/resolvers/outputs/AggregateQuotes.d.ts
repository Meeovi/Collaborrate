import { QuotesAvgAggregate } from "../outputs/QuotesAvgAggregate";
import { QuotesCountAggregate } from "../outputs/QuotesCountAggregate";
import { QuotesMaxAggregate } from "../outputs/QuotesMaxAggregate";
import { QuotesMinAggregate } from "../outputs/QuotesMinAggregate";
import { QuotesSumAggregate } from "../outputs/QuotesSumAggregate";
export declare class AggregateQuotes {
    _count: QuotesCountAggregate | null;
    _avg: QuotesAvgAggregate | null;
    _sum: QuotesSumAggregate | null;
    _min: QuotesMinAggregate | null;
    _max: QuotesMaxAggregate | null;
}
