import { StatesAvgAggregate } from "../outputs/StatesAvgAggregate";
import { StatesCountAggregate } from "../outputs/StatesCountAggregate";
import { StatesMaxAggregate } from "../outputs/StatesMaxAggregate";
import { StatesMinAggregate } from "../outputs/StatesMinAggregate";
import { StatesSumAggregate } from "../outputs/StatesSumAggregate";
export declare class StatesGroupBy {
    id: number;
    name: string;
    description: string | null;
    country: string | null;
    image: string | null;
    trainings: string | null;
    _count: StatesCountAggregate | null;
    _avg: StatesAvgAggregate | null;
    _sum: StatesSumAggregate | null;
    _min: StatesMinAggregate | null;
    _max: StatesMaxAggregate | null;
}
