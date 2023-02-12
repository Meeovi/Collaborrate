import { SortOrderInput } from "../inputs/SortOrderInput";
import { ThemesAvgOrderByAggregateInput } from "../inputs/ThemesAvgOrderByAggregateInput";
import { ThemesCountOrderByAggregateInput } from "../inputs/ThemesCountOrderByAggregateInput";
import { ThemesMaxOrderByAggregateInput } from "../inputs/ThemesMaxOrderByAggregateInput";
import { ThemesMinOrderByAggregateInput } from "../inputs/ThemesMinOrderByAggregateInput";
import { ThemesSumOrderByAggregateInput } from "../inputs/ThemesSumOrderByAggregateInput";
export declare class ThemesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: SortOrderInput | undefined;
    parent_theme?: SortOrderInput | undefined;
    theme_path?: SortOrderInput | undefined;
    action?: SortOrderInput | undefined;
    website_id?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    _count?: ThemesCountOrderByAggregateInput | undefined;
    _avg?: ThemesAvgOrderByAggregateInput | undefined;
    _max?: ThemesMaxOrderByAggregateInput | undefined;
    _min?: ThemesMinOrderByAggregateInput | undefined;
    _sum?: ThemesSumOrderByAggregateInput | undefined;
}
