import { ProjectsAvgAggregate } from "../outputs/ProjectsAvgAggregate";
import { ProjectsCountAggregate } from "../outputs/ProjectsCountAggregate";
import { ProjectsMaxAggregate } from "../outputs/ProjectsMaxAggregate";
import { ProjectsMinAggregate } from "../outputs/ProjectsMinAggregate";
import { ProjectsSumAggregate } from "../outputs/ProjectsSumAggregate";
export declare class ProjectsGroupBy {
    id: bigint;
    name: string | null;
    project_manager: string | null;
    start_date: string | null;
    end_date: string | null;
    resource: string | null;
    considerworkingdays: string | null;
    project_template: string | null;
    status: string | null;
    created_at: Date | null;
    _count: ProjectsCountAggregate | null;
    _avg: ProjectsAvgAggregate | null;
    _sum: ProjectsSumAggregate | null;
    _min: ProjectsMinAggregate | null;
    _max: ProjectsMaxAggregate | null;
}
