import { SegmentsAvgOrderByAggregateInput } from "../inputs/SegmentsAvgOrderByAggregateInput";
import { SegmentsCountOrderByAggregateInput } from "../inputs/SegmentsCountOrderByAggregateInput";
import { SegmentsMaxOrderByAggregateInput } from "../inputs/SegmentsMaxOrderByAggregateInput";
import { SegmentsMinOrderByAggregateInput } from "../inputs/SegmentsMinOrderByAggregateInput";
import { SegmentsSumOrderByAggregateInput } from "../inputs/SegmentsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SegmentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    website?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    apply_to?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    _count?: SegmentsCountOrderByAggregateInput | undefined;
    _avg?: SegmentsAvgOrderByAggregateInput | undefined;
    _max?: SegmentsMaxOrderByAggregateInput | undefined;
    _min?: SegmentsMinOrderByAggregateInput | undefined;
    _sum?: SegmentsSumOrderByAggregateInput | undefined;
}
