import { BigIntFilter } from "../inputs/BigIntFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Content_typeWhereInput {
    AND?: Content_typeWhereInput[] | undefined;
    OR?: Content_typeWhereInput[] | undefined;
    NOT?: Content_typeWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    text?: StringNullableFilter | undefined;
    number?: DecimalNullableFilter | undefined;
    json?: JsonNullableFilter | undefined;
    link?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    uid?: StringNullableFilter | undefined;
    date?: DateTimeNullableFilter | undefined;
    time?: DateTimeNullableFilter | undefined;
    timestamp?: DateTimeNullableFilter | undefined;
    boolean?: BoolNullableFilter | undefined;
    rich_text?: StringNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    database_name?: StringNullableFilter | undefined;
}
