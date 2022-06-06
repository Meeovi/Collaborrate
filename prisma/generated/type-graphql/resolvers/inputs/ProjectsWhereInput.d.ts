import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProjectsWhereInput {
    AND?: ProjectsWhereInput[] | undefined;
    OR?: ProjectsWhereInput[] | undefined;
    NOT?: ProjectsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    name?: StringNullableFilter | undefined;
    project_manager?: StringNullableFilter | undefined;
    start_date?: StringNullableFilter | undefined;
    end_date?: StringNullableFilter | undefined;
    resource?: StringNullableFilter | undefined;
    considerworkingdays?: StringNullableFilter | undefined;
    project_template?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
}
