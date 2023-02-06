import { ThemesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ThemesOrderByWithRelationAndSearchRelevanceInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";
export declare class FindManyThemesArgs {
    where?: ThemesWhereInput | undefined;
    orderBy?: ThemesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ThemesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "parent_theme" | "theme_path" | "action" | "website_id" | "websites"> | undefined;
}
