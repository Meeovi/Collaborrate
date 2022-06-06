import { ReportsAvgOrderByAggregateInput } from "../inputs/ReportsAvgOrderByAggregateInput";
import { ReportsCountOrderByAggregateInput } from "../inputs/ReportsCountOrderByAggregateInput";
import { ReportsMaxOrderByAggregateInput } from "../inputs/ReportsMaxOrderByAggregateInput";
import { ReportsMinOrderByAggregateInput } from "../inputs/ReportsMinOrderByAggregateInput";
import { ReportsSumOrderByAggregateInput } from "../inputs/ReportsSumOrderByAggregateInput";
export declare class ReportsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    customer?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    subtotal?: "asc" | "desc" | undefined;
    applied_coupon?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    updated?: "asc" | "desc" | undefined;
    ip_address?: "asc" | "desc" | undefined;
    _count?: ReportsCountOrderByAggregateInput | undefined;
    _avg?: ReportsAvgOrderByAggregateInput | undefined;
    _max?: ReportsMaxOrderByAggregateInput | undefined;
    _min?: ReportsMinOrderByAggregateInput | undefined;
    _sum?: ReportsSumOrderByAggregateInput | undefined;
}
