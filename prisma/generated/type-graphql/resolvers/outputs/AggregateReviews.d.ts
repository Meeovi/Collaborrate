import { ReviewsAvgAggregate } from "../outputs/ReviewsAvgAggregate";
import { ReviewsCountAggregate } from "../outputs/ReviewsCountAggregate";
import { ReviewsMaxAggregate } from "../outputs/ReviewsMaxAggregate";
import { ReviewsMinAggregate } from "../outputs/ReviewsMinAggregate";
import { ReviewsSumAggregate } from "../outputs/ReviewsSumAggregate";
export declare class AggregateReviews {
    _count: ReviewsCountAggregate | null;
    _avg: ReviewsAvgAggregate | null;
    _sum: ReviewsSumAggregate | null;
    _min: ReviewsMinAggregate | null;
    _max: ReviewsMaxAggregate | null;
}
