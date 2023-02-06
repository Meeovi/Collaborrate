import { BrandsOrderByWithAggregationInput } from "../../../inputs/BrandsOrderByWithAggregationInput";
import { BrandsScalarWhereWithAggregatesInput } from "../../../inputs/BrandsScalarWhereWithAggregatesInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";
export declare class GroupByBrandsArgs {
    where?: BrandsWhereInput | undefined;
    orderBy?: BrandsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "code" | "name" | "country" | "state" | "isPublic" | "city" | "product" | "description" | "media" | "mediamanager" | "products" | "workspaces">;
    having?: BrandsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
