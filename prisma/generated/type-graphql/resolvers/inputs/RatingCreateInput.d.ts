import { Prisma } from "@prisma/client";
import { ProductsCreateNestedOneWithoutRatingInput } from "../inputs/ProductsCreateNestedOneWithoutRatingInput";
export declare class RatingCreateInput {
    default_value?: string | undefined;
    default_store_view?: string | undefined;
    rating_visibility?: string | undefined;
    active?: boolean | undefined;
    sort_order?: Prisma.Decimal | undefined;
    products?: ProductsCreateNestedOneWithoutRatingInput | undefined;
}
