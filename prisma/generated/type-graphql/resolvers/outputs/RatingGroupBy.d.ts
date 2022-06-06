import { Prisma } from "@prisma/client";
import { RatingAvgAggregate } from "../outputs/RatingAvgAggregate";
import { RatingCountAggregate } from "../outputs/RatingCountAggregate";
import { RatingMaxAggregate } from "../outputs/RatingMaxAggregate";
import { RatingMinAggregate } from "../outputs/RatingMinAggregate";
import { RatingSumAggregate } from "../outputs/RatingSumAggregate";
export declare class RatingGroupBy {
    id: number;
    default_value: string | null;
    default_store_view: string | null;
    rating_visibility: string | null;
    active: boolean | null;
    sort_order: Prisma.Decimal | null;
    prod_id: bigint;
    _count: RatingCountAggregate | null;
    _avg: RatingAvgAggregate | null;
    _sum: RatingSumAggregate | null;
    _min: RatingMinAggregate | null;
    _max: RatingMaxAggregate | null;
}
