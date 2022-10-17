export declare class CouponsCreateManyInput {
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
    prod_id: bigint;
    products_couponsToproducts?: string | undefined;
}
