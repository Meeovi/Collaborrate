import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DiscountsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: SortOrderInput | undefined;
    discount?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    published?: SortOrderInput | undefined;
    special_offers?: SortOrderInput | undefined;
    rewards?: SortOrderInput | undefined;
    coupons?: SortOrderInput | undefined;
    expiration?: SortOrderInput | undefined;
    categories?: SortOrderInput | undefined;
    articles?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    creditMemo?: SortOrderInput | undefined;
    billToName?: SortOrderInput | undefined;
    orderNumber?: SortOrderInput | undefined;
    refunded?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
}
