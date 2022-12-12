import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Content_typeScalarWhereWithAggregatesInput {
    AND?: Content_typeScalarWhereWithAggregatesInput[] | undefined;
    OR?: Content_typeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Content_typeScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    text?: StringNullableWithAggregatesFilter | undefined;
    number?: DecimalNullableWithAggregatesFilter | undefined;
    json?: JsonNullableWithAggregatesFilter | undefined;
    link?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    uid?: StringNullableWithAggregatesFilter | undefined;
    date?: DateTimeNullableWithAggregatesFilter | undefined;
    time?: DateTimeNullableWithAggregatesFilter | undefined;
    timestamp?: DateTimeNullableWithAggregatesFilter | undefined;
    boolean?: BoolNullableWithAggregatesFilter | undefined;
    rich_text?: StringNullableWithAggregatesFilter | undefined;
    password?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    database_name?: StringNullableWithAggregatesFilter | undefined;
}
