import { Prisma } from "@prisma/client";
export declare class RatingMinAggregate {
    id: number | null;
    default_value: string | null;
    default_store_view: string | null;
    rating_visibility: string | null;
    active: boolean | null;
    sort_order: Prisma.Decimal | null;
    prod_id: bigint | null;
    products: string | null;
}
