import { StatisticsAvgOrderByAggregateInput } from "../inputs/StatisticsAvgOrderByAggregateInput";
import { StatisticsCountOrderByAggregateInput } from "../inputs/StatisticsCountOrderByAggregateInput";
import { StatisticsMaxOrderByAggregateInput } from "../inputs/StatisticsMaxOrderByAggregateInput";
import { StatisticsMinOrderByAggregateInput } from "../inputs/StatisticsMinOrderByAggregateInput";
import { StatisticsSumOrderByAggregateInput } from "../inputs/StatisticsSumOrderByAggregateInput";
export declare class StatisticsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    special_offers?: "asc" | "desc" | undefined;
    reports?: "asc" | "desc" | undefined;
    rewards?: "asc" | "desc" | undefined;
    coupons?: "asc" | "desc" | undefined;
    expiration?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    _count?: StatisticsCountOrderByAggregateInput | undefined;
    _avg?: StatisticsAvgOrderByAggregateInput | undefined;
    _max?: StatisticsMaxOrderByAggregateInput | undefined;
    _min?: StatisticsMinOrderByAggregateInput | undefined;
    _sum?: StatisticsSumOrderByAggregateInput | undefined;
}
