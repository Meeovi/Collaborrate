import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Pdf_templatesWhereInput {
    AND?: Pdf_templatesWhereInput[] | undefined;
    OR?: Pdf_templatesWhereInput[] | undefined;
    NOT?: Pdf_templatesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
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
