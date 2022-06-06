import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Email_templatesWhereInput {
    AND?: Email_templatesWhereInput[] | undefined;
    OR?: Email_templatesWhereInput[] | undefined;
    NOT?: Email_templatesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    active?: StringNullableFilter | undefined;
    insert_variable?: StringNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    header?: StringNullableFilter | undefined;
    footer?: StringNullableFilter | undefined;
    width?: StringNullableFilter | undefined;
    height?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
}
