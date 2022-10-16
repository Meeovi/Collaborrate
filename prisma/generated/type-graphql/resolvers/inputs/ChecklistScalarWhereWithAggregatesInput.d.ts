import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ChecklistScalarWhereWithAggregatesInput {
    AND?: ChecklistScalarWhereWithAggregatesInput[] | undefined;
    OR?: ChecklistScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ChecklistScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    location?: StringNullableWithAggregatesFilter | undefined;
    regional_manager?: StringNullableWithAggregatesFilter | undefined;
    manager?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    ticket?: StringNullableWithAggregatesFilter | undefined;
    project?: StringNullableWithAggregatesFilter | undefined;
    region?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    prod_id?: StringNullableWithAggregatesFilter | undefined;
    trainings?: StringNullableWithAggregatesFilter | undefined;
    task?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
}
