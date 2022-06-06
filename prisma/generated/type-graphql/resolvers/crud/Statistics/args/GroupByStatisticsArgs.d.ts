import { StatisticsOrderByWithAggregationInput } from "../../../inputs/StatisticsOrderByWithAggregationInput";
import { StatisticsScalarWhereWithAggregatesInput } from "../../../inputs/StatisticsScalarWhereWithAggregatesInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";
export declare class GroupByStatisticsArgs {
    where?: StatisticsWhereInput | undefined;
    orderBy?: StatisticsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "special_offers" | "reports" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;
    having?: StatisticsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
