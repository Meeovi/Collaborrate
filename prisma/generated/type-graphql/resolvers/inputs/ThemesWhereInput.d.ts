import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ThemesWhereInput {
    AND?: ThemesWhereInput[] | undefined;
    OR?: ThemesWhereInput[] | undefined;
    NOT?: ThemesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringNullableFilter | undefined;
    parent_theme?: StringNullableFilter | undefined;
    theme_path?: StringNullableFilter | undefined;
    action?: StringNullableFilter | undefined;
    website_id?: BigIntFilter | undefined;
    websites?: StringFilter | undefined;
}
