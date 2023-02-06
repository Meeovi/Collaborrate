import { PartnersOrderByWithAggregationInput } from "../../../inputs/PartnersOrderByWithAggregationInput";
import { PartnersScalarWhereWithAggregatesInput } from "../../../inputs/PartnersScalarWhereWithAggregatesInput";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";
export declare class GroupByPartnersArgs {
    where?: PartnersWhereInput | undefined;
    orderBy?: PartnersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "address" | "city" | "state" | "country" | "isPublic" | "business_type">;
    having?: PartnersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
