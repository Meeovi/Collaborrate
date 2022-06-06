import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ThemesScalarWhereInput {
    AND?: ThemesScalarWhereInput[] | undefined;
    OR?: ThemesScalarWhereInput[] | undefined;
    NOT?: ThemesScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringNullableFilter | undefined;
    parent_theme?: StringNullableFilter | undefined;
    theme_path?: StringNullableFilter | undefined;
    action?: StringNullableFilter | undefined;
    website_id?: BigIntFilter | undefined;
}
