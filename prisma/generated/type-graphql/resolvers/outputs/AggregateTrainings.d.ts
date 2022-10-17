import { TrainingsAvgAggregate } from "../outputs/TrainingsAvgAggregate";
import { TrainingsCountAggregate } from "../outputs/TrainingsCountAggregate";
import { TrainingsMaxAggregate } from "../outputs/TrainingsMaxAggregate";
import { TrainingsMinAggregate } from "../outputs/TrainingsMinAggregate";
import { TrainingsSumAggregate } from "../outputs/TrainingsSumAggregate";
export declare class AggregateTrainings {
    _count: TrainingsCountAggregate | null;
    _avg: TrainingsAvgAggregate | null;
    _sum: TrainingsSumAggregate | null;
    _min: TrainingsMinAggregate | null;
    _max: TrainingsMaxAggregate | null;
}
