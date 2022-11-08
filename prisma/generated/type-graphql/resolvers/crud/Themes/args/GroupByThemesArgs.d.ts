import { ThemesOrderByWithAggregationInput } from "../../../inputs/ThemesOrderByWithAggregationInput";
import { ThemesScalarWhereWithAggregatesInput } from "../../../inputs/ThemesScalarWhereWithAggregatesInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";
export declare class GroupByThemesArgs {
    where?: ThemesWhereInput | undefined;
    orderBy?: ThemesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "parent_theme" | "theme_path" | "action" | "website_id" | "websites">;
    having?: ThemesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
