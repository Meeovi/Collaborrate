import { SegmentsAvgOrderByAggregateInput } from "../inputs/SegmentsAvgOrderByAggregateInput";
import { SegmentsCountOrderByAggregateInput } from "../inputs/SegmentsCountOrderByAggregateInput";
import { SegmentsMaxOrderByAggregateInput } from "../inputs/SegmentsMaxOrderByAggregateInput";
import { SegmentsMinOrderByAggregateInput } from "../inputs/SegmentsMinOrderByAggregateInput";
import { SegmentsSumOrderByAggregateInput } from "../inputs/SegmentsSumOrderByAggregateInput";
export declare class SegmentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    apply_to?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    _count?: SegmentsCountOrderByAggregateInput | undefined;
    _avg?: SegmentsAvgOrderByAggregateInput | undefined;
    _max?: SegmentsMaxOrderByAggregateInput | undefined;
    _min?: SegmentsMinOrderByAggregateInput | undefined;
    _sum?: SegmentsSumOrderByAggregateInput | undefined;
}
