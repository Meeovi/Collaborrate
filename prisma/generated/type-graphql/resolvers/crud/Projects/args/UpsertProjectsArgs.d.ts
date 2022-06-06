import { ProjectsCreateInput } from "../../../inputs/ProjectsCreateInput";
import { ProjectsUpdateInput } from "../../../inputs/ProjectsUpdateInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";
export declare class UpsertProjectsArgs {
    where: ProjectsWhereUniqueInput;
    create: ProjectsCreateInput;
    update: ProjectsUpdateInput;
}
