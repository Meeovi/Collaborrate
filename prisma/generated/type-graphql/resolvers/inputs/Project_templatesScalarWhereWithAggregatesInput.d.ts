import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Project_templatesScalarWhereWithAggregatesInput {
    AND?: Project_templatesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Project_templatesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Project_templatesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    consider_working_days?: StringNullableWithAggregatesFilter | undefined;
    priority?: StringNullableWithAggregatesFilter | undefined;
    project_manager?: StringNullableWithAggregatesFilter | undefined;
    resource?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
}
