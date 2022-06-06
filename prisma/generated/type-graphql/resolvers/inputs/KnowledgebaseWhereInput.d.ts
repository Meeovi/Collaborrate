import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class KnowledgebaseWhereInput {
    AND?: KnowledgebaseWhereInput[] | undefined;
    OR?: KnowledgebaseWhereInput[] | undefined;
    NOT?: KnowledgebaseWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    revision?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    resolution?: StringNullableFilter | undefined;
    author?: StringNullableFilter | undefined;
    approver?: StringNullableFilter | undefined;
    date_modified?: DateTimeNullableFilter | undefined;
}
