import { TasksAvgAggregate } from "../outputs/TasksAvgAggregate";
import { TasksCountAggregate } from "../outputs/TasksCountAggregate";
import { TasksMaxAggregate } from "../outputs/TasksMaxAggregate";
import { TasksMinAggregate } from "../outputs/TasksMinAggregate";
import { TasksSumAggregate } from "../outputs/TasksSumAggregate";
export declare class AggregateTasks {
    _count: TasksCountAggregate | null;
    _avg: TasksAvgAggregate | null;
    _sum: TasksSumAggregate | null;
    _min: TasksMinAggregate | null;
    _max: TasksMaxAggregate | null;
}
