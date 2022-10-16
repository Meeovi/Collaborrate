import { WorkspacesAvgAggregate } from "../outputs/WorkspacesAvgAggregate";
import { WorkspacesCountAggregate } from "../outputs/WorkspacesCountAggregate";
import { WorkspacesMaxAggregate } from "../outputs/WorkspacesMaxAggregate";
import { WorkspacesMinAggregate } from "../outputs/WorkspacesMinAggregate";
import { WorkspacesSumAggregate } from "../outputs/WorkspacesSumAggregate";
export declare class AggregateWorkspaces {
    _count: WorkspacesCountAggregate | null;
    _avg: WorkspacesAvgAggregate | null;
    _sum: WorkspacesSumAggregate | null;
    _min: WorkspacesMinAggregate | null;
    _max: WorkspacesMaxAggregate | null;
}
