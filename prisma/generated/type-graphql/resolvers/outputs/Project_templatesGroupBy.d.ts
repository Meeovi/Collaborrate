import { Project_templatesAvgAggregate } from "../outputs/Project_templatesAvgAggregate";
import { Project_templatesCountAggregate } from "../outputs/Project_templatesCountAggregate";
import { Project_templatesMaxAggregate } from "../outputs/Project_templatesMaxAggregate";
import { Project_templatesMinAggregate } from "../outputs/Project_templatesMinAggregate";
import { Project_templatesSumAggregate } from "../outputs/Project_templatesSumAggregate";
export declare class Project_templatesGroupBy {
    id: bigint;
    name: string | null;
    status: string | null;
    consider_working_days: string | null;
    priority: string | null;
    project_manager: string | null;
    resource: string | null;
    content: string | null;
    _count: Project_templatesCountAggregate | null;
    _avg: Project_templatesAvgAggregate | null;
    _sum: Project_templatesSumAggregate | null;
    _min: Project_templatesMinAggregate | null;
    _max: Project_templatesMaxAggregate | null;
}
