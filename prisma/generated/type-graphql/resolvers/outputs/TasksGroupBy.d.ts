import { TasksAvgAggregate } from "../outputs/TasksAvgAggregate";
import { TasksCountAggregate } from "../outputs/TasksCountAggregate";
import { TasksMaxAggregate } from "../outputs/TasksMaxAggregate";
import { TasksMinAggregate } from "../outputs/TasksMinAggregate";
import { TasksSumAggregate } from "../outputs/TasksSumAggregate";
export declare class TasksGroupBy {
    id: bigint;
    created_at: Date | null;
    subject: string | null;
    start_date: string | null;
    due_date: string | null;
    priority: string | null;
    description: string | null;
    status: string | null;
    related_to: string | null;
    contact: string | null;
    assigned_to: string | null;
    date_modified: Date | null;
    _count: TasksCountAggregate | null;
    _avg: TasksAvgAggregate | null;
    _sum: TasksSumAggregate | null;
    _min: TasksMinAggregate | null;
    _max: TasksMaxAggregate | null;
}
