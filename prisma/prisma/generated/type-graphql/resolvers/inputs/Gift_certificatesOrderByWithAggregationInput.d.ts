import { Gift_certificatesAvgOrderByAggregateInput } from "../inputs/Gift_certificatesAvgOrderByAggregateInput";
import { Gift_certificatesCountOrderByAggregateInput } from "../inputs/Gift_certificatesCountOrderByAggregateInput";
import { Gift_certificatesMaxOrderByAggregateInput } from "../inputs/Gift_certificatesMaxOrderByAggregateInput";
import { Gift_certificatesMinOrderByAggregateInput } from "../inputs/Gift_certificatesMinOrderByAggregateInput";
import { Gift_certificatesSumOrderByAggregateInput } from "../inputs/Gift_certificatesSumOrderByAggregateInput";
export declare class Gift_certificatesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    discount?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    special_offers?: "asc" | "desc" | undefined;
    rewards?: "asc" | "desc" | undefined;
    coupons?: "asc" | "desc" | undefined;
    expiration?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    _count?: Gift_certificatesCountOrderByAggregateInput | undefined;
    _avg?: Gift_certificatesAvgOrderByAggregateInput | undefined;
    _max?: Gift_certificatesMaxOrderByAggregateInput | undefined;
    _min?: Gift_certificatesMinOrderByAggregateInput | undefined;
    _sum?: Gift_certificatesSumOrderByAggregateInput | undefined;
}
