import { ProjectsOrderByWithRelationInput } from "../../../inputs/ProjectsOrderByWithRelationInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";
export declare class AggregateProjectsArgs {
    where?: ProjectsWhereInput | undefined;
    orderBy?: ProjectsOrderByWithRelationInput[] | undefined;
    cursor?: ProjectsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
