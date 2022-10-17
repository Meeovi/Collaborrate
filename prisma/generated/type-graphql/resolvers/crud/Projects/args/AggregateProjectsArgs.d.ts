import { ProjectsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProjectsOrderByWithRelationAndSearchRelevanceInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";
export declare class AggregateProjectsArgs {
    where?: ProjectsWhereInput | undefined;
    orderBy?: ProjectsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ProjectsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
