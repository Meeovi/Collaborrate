import { WebsitesCreateNestedOneWithoutThemesInput } from "../inputs/WebsitesCreateNestedOneWithoutThemesInput";
export declare class ThemesCreateInput {
    title?: string | undefined;
    parent_theme?: string | undefined;
    theme_path?: string | undefined;
    action?: string | undefined;
    websites?: WebsitesCreateNestedOneWithoutThemesInput | undefined;
}
