import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ThemesWhereInput } from "../inputs/ThemesWhereInput";
export declare class ThemesWhereUniqueInput {
    id?: number | undefined;
    AND?: ThemesWhereInput[] | undefined;
    OR?: ThemesWhereInput[] | undefined;
    NOT?: ThemesWhereInput[] | undefined;
    title?: StringNullableFilter | undefined;
    parent_theme?: StringNullableFilter | undefined;
    theme_path?: StringNullableFilter | undefined;
    action?: StringNullableFilter | undefined;
    website_id?: BigIntFilter | undefined;
    websites?: StringFilter | undefined;
}
