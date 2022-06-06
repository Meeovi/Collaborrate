import { ProjectsOrderByWithRelationInput } from "../../../inputs/ProjectsOrderByWithRelationInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";
export declare class FindManyProjectsArgs {
    where?: ProjectsWhereInput | undefined;
    orderBy?: ProjectsOrderByWithRelationInput[] | undefined;
    cursor?: ProjectsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "project_manager" | "start_date" | "end_date" | "resource" | "considerworkingdays" | "project_template" | "status" | "created_at"> | undefined;
}
