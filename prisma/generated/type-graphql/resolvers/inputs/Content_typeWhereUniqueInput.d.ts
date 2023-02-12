import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { Content_typeWhereInput } from "../inputs/Content_typeWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Content_typeWhereUniqueInput {
    id?: bigint | undefined;
    AND?: Content_typeWhereInput[] | undefined;
    OR?: Content_typeWhereInput[] | undefined;
    NOT?: Content_typeWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    text?: StringNullableFilter | undefined;
    number?: IntNullableFilter | undefined;
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
