import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CurrenciesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    code?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    region?: SortOrderInput | undefined;
    symbol?: SortOrderInput | undefined;
    useStandard?: SortOrderInput | undefined;
}
