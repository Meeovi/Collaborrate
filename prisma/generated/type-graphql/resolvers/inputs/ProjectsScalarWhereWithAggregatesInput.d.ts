import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ProjectsScalarWhereWithAggregatesInput {
    AND?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    project_manager?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    end_date?: StringNullableWithAggregatesFilter | undefined;
    resource?: StringNullableWithAggregatesFilter | undefined;
    considerworkingdays?: StringNullableWithAggregatesFilter | undefined;
    project_template?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
