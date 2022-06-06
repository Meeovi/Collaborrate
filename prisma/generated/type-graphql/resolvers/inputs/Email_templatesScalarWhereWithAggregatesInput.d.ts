import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Email_templatesScalarWhereWithAggregatesInput {
    AND?: Email_templatesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Email_templatesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Email_templatesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    assigned_to?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    active?: StringNullableWithAggregatesFilter | undefined;
    insert_variable?: StringNullableWithAggregatesFilter | undefined;
    subject?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    header?: StringNullableWithAggregatesFilter | undefined;
    footer?: StringNullableWithAggregatesFilter | undefined;
    width?: StringNullableWithAggregatesFilter | undefined;
    height?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
}
