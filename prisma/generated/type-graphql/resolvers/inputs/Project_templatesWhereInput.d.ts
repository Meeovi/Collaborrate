import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Project_templatesWhereInput {
    AND?: Project_templatesWhereInput[] | undefined;
    OR?: Project_templatesWhereInput[] | undefined;
    NOT?: Project_templatesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    name?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    consider_working_days?: StringNullableFilter | undefined;
    priority?: StringNullableFilter | undefined;
    project_manager?: StringNullableFilter | undefined;
    resource?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
}
