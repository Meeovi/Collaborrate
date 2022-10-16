import { NewslettersAvgAggregate } from "../outputs/NewslettersAvgAggregate";
import { NewslettersCountAggregate } from "../outputs/NewslettersCountAggregate";
import { NewslettersMaxAggregate } from "../outputs/NewslettersMaxAggregate";
import { NewslettersMinAggregate } from "../outputs/NewslettersMinAggregate";
import { NewslettersSumAggregate } from "../outputs/NewslettersSumAggregate";
export declare class AggregateNewsletters {
    _count: NewslettersCountAggregate | null;
    _avg: NewslettersAvgAggregate | null;
    _sum: NewslettersSumAggregate | null;
    _min: NewslettersMinAggregate | null;
    _max: NewslettersMaxAggregate | null;
}
