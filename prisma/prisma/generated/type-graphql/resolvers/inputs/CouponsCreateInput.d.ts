import { ProductsCreateNestedOneWithoutCouponsInput } from "../inputs/ProductsCreateNestedOneWithoutCouponsInput";
export declare class CouponsCreateInput {
    id?: bigint | undefined;
    name: string;
    excerpt?: string | undefined;
    discount?: string | undefined;
    image?: string | undefined;
    published?: Date | undefined;
    expiration?: string | undefined;
    categories?: string | undefined;
    articles?: string | undefined;
    products?: string | undefined;
    customers?: string | undefined;
    users?: string | undefined;
    products_couponsToproducts?: ProductsCreateNestedOneWithoutCouponsInput | undefined;
}
