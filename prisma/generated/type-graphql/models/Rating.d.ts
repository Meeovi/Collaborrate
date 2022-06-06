import { Prisma } from "@prisma/client";
import { Products } from "../models/Products";
export declare class Rating {
    id: number;
    default_value?: string | null;
    default_store_view?: string | null;
    rating_visibility?: string | null;
    active?: boolean | null;
    sort_order?: Prisma.Decimal | null;
    prod_id: bigint;
    products?: Products;
}
