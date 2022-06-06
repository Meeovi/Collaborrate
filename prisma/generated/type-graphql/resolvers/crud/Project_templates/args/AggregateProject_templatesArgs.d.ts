import { Project_templatesOrderByWithRelationInput } from "../../../inputs/Project_templatesOrderByWithRelationInput";
import { Project_templatesWhereInput } from "../../../inputs/Project_templatesWhereInput";
import { Project_templatesWhereUniqueInput } from "../../../inputs/Project_templatesWhereUniqueInput";
export declare class AggregateProject_templatesArgs {
    where?: Project_templatesWhereInput | undefined;
    orderBy?: Project_templatesOrderByWithRelationInput[] | undefined;
    cursor?: Project_templatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
