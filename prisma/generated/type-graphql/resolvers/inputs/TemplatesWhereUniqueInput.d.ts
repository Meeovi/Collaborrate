import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TemplatesWhereInput } from "../inputs/TemplatesWhereInput";
export declare class TemplatesWhereUniqueInput {
    id?: bigint | undefined;
    AND?: TemplatesWhereInput[] | undefined;
    OR?: TemplatesWhereInput[] | undefined;
    NOT?: TemplatesWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    active?: StringNullableFilter | undefined;
    page_size?: StringNullableFilter | undefined;
    orientation?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    header?: StringNullableFilter | undefined;
    footer?: StringNullableFilter | undefined;
    margin_left?: StringNullableFilter | undefined;
    margin_right?: StringNullableFilter | undefined;
    margin_top?: StringNullableFilter | undefined;
    margin_bottom?: StringNullableFilter | undefined;
    margin_header?: StringNullableFilter | undefined;
    margin_footer?: StringNullableFilter | undefined;
}
