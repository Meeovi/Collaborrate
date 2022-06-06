import { Prisma } from "@prisma/client";
export declare class RatingCreateManyInput {
    id?: number | undefined;
    default_value?: string | undefined;
    default_store_view?: string | undefined;
    rating_visibility?: string | undefined;
    active?: boolean | undefined;
    sort_order?: Prisma.Decimal | undefined;
    prod_id?: bigint | undefined;
}
