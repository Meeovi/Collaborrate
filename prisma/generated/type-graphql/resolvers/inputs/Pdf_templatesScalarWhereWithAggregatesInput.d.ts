import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Pdf_templatesScalarWhereWithAggregatesInput {
    AND?: Pdf_templatesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Pdf_templatesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Pdf_templatesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    assigned_to?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    active?: StringNullableWithAggregatesFilter | undefined;
    page_size?: StringNullableWithAggregatesFilter | undefined;
    orientation?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    header?: StringNullableWithAggregatesFilter | undefined;
    footer?: StringNullableWithAggregatesFilter | undefined;
    margin_left?: StringNullableWithAggregatesFilter | undefined;
    margin_right?: StringNullableWithAggregatesFilter | undefined;
    margin_top?: StringNullableWithAggregatesFilter | undefined;
    margin_bottom?: StringNullableWithAggregatesFilter | undefined;
    margin_header?: StringNullableWithAggregatesFilter | undefined;
    margin_footer?: StringNullableWithAggregatesFilter | undefined;
}
