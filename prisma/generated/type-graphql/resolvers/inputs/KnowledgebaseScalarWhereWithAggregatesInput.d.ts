import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class KnowledgebaseScalarWhereWithAggregatesInput {
    AND?: KnowledgebaseScalarWhereWithAggregatesInput[] | undefined;
    OR?: KnowledgebaseScalarWhereWithAggregatesInput[] | undefined;
    NOT?: KnowledgebaseScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    revision?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    resolution?: StringNullableWithAggregatesFilter | undefined;
    author?: StringNullableWithAggregatesFilter | undefined;
    approver?: StringNullableWithAggregatesFilter | undefined;
    date_modified?: DateTimeNullableWithAggregatesFilter | undefined;
}
