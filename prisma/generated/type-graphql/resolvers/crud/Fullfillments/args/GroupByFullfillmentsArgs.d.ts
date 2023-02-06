import { FullfillmentsOrderByWithAggregationInput } from "../../../inputs/FullfillmentsOrderByWithAggregationInput";
import { FullfillmentsScalarWhereWithAggregatesInput } from "../../../inputs/FullfillmentsScalarWhereWithAggregatesInput";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";
export declare class GroupByFullfillmentsArgs {
    where?: FullfillmentsWhereInput | undefined;
    orderBy?: FullfillmentsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "shipping_zones" | "company" | "address" | "address_two" | "city" | "state" | "zipcode" | "country" | "country_area" | "phone" | "pickup" | "stock">;
    having?: FullfillmentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
