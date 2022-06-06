import { Prisma } from "@prisma/client";
export declare class RatingCreateWithoutProductsInput {
    default_value?: string | undefined;
    default_store_view?: string | undefined;
    rating_visibility?: string | undefined;
    active?: boolean | undefined;
    sort_order?: Prisma.Decimal | undefined;
}
