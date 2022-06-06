import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ThemesScalarWhereWithAggregatesInput {
    AND?: ThemesScalarWhereWithAggregatesInput[] | undefined;
    OR?: ThemesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ThemesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringNullableWithAggregatesFilter | undefined;
    parent_theme?: StringNullableWithAggregatesFilter | undefined;
    theme_path?: StringNullableWithAggregatesFilter | undefined;
    action?: StringNullableWithAggregatesFilter | undefined;
    website_id?: BigIntWithAggregatesFilter | undefined;
}
