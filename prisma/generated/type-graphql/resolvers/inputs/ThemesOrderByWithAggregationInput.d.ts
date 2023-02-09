import { ThemesAvgOrderByAggregateInput } from "../inputs/ThemesAvgOrderByAggregateInput";
import { ThemesCountOrderByAggregateInput } from "../inputs/ThemesCountOrderByAggregateInput";
import { ThemesMaxOrderByAggregateInput } from "../inputs/ThemesMaxOrderByAggregateInput";
import { ThemesMinOrderByAggregateInput } from "../inputs/ThemesMinOrderByAggregateInput";
import { ThemesSumOrderByAggregateInput } from "../inputs/ThemesSumOrderByAggregateInput";
export declare class ThemesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    parent_theme?: "asc" | "desc" | undefined;
    theme_path?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    website_id?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    _count?: ThemesCountOrderByAggregateInput | undefined;
    _avg?: ThemesAvgOrderByAggregateInput | undefined;
    _max?: ThemesMaxOrderByAggregateInput | undefined;
    _min?: ThemesMinOrderByAggregateInput | undefined;
    _sum?: ThemesSumOrderByAggregateInput | undefined;
}
